import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


const steps = [10, 40, 60, 80, 95, 100];

const motionProps = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.3 },
};

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    injuryType: "",
    accidentTime: "",
    fault: "",
    medical: [],
    attorney: "",
    fullName: "",
    phone: "",
    zipCode: "",
    email: "",
    agreeToTerms: false,
  });

  // Load TrustedForm SDK for certificate
  useEffect(() => {
    if (!document.getElementById("trustedform-sdk")) {
      const tf = document.createElement("script");
      tf.type = "text/javascript";
      tf.async = true;
      tf.id = "trustedform-sdk";
      tf.src =
        (document.location.protocol === "https:" ? "https" : "http") +
        "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=" +
        new Date().getTime() +
        Math.random();
      document.head.appendChild(tf);
    }
  }, []);

  const goToNext = () => setStep((prev) => Math.min(prev + 1, steps.length));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "medical") {
      const updatedMedical = checked
        ? [...formData.medical, value]
        : formData.medical.filter((item) => item !== value);
      setFormData({ ...formData, medical: updatedMedical });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
      goToNext();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.injuryType) newErrors.injuryType = "Please select how you were hurt.";
    if (!formData.accidentTime) newErrors.accidentTime = "Please select accident timing.";
    if (!formData.fault) newErrors.fault = "Please select fault status.";
    if (formData.medical.length === 0) newErrors.medical = "Please select at least one medical option.";
    if (!formData.attorney) newErrors.attorney = "Please select attorney status.";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.zipCode || formData.zipCode.length !== 5) newErrors.zipCode = "Zip code must be 5 digits.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree before submitting.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    const payload = {
      injury_type: formData.injuryType,
      accident_time: formData.accidentTime,
      fault: formData.fault,
      medical: formData.medical,
      attorney: formData.attorney,
      full_name: formData.fullName,
      phone: formData.phone,
      zip_code: formData.zipCode,
      email: formData.email,
      agree_to_terms: formData.agreeToTerms,
      tf_cert_url: document.getElementById("xxTrustedFormCertUrl")?.value || null,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbynH3mET6nj678x9wLMLVkIXF8S25EH_mvj94DccgvQXawM3VwbA0i0YZZ6TYNvfpGf/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify(payload),
      });


      const result = await response.json();
      console.log("Data submitted to Google Sheets:", result);

      setTimeout(() => {
        navigate("/offers");
      }, 1500);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
      setSubmitted(false);
    }
  };

  const progressPercent = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-xl mt-6 sm:mt-10 w-full">
      {!submitted && (
        <div className="relative mb-6 sm:mb-8">
          <div className="w-full h-3 sm:h-4 bg-gray-300 rounded-full overflow-hidden" />
          <motion.div
            className="absolute top-0 left-0 h-3 sm:h-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-md"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div className="absolute top-0 left-0 w-full h-3 sm:h-4 flex justify-between items-center px-2 sm:px-3 text-[10px] sm:text-xs font-semibold text-white pointer-events-none">
            <span>
              Step {step} of {steps.length}
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-green-600 font-bold text-lg sm:text-xl"
            >
              ✅ Thank you! Your form was submitted successfully.
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div key="step1" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">1. How were you hurt?</h2>
                  {["Automobile Accident", "Medical Negligence", "Slip & Fall", "Other Injury or Accident"].map(option => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        name="injuryType"
                        value={option}
                        checked={formData.injuryType === option}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                  {errors.injuryType && <p className="text-red-600 text-sm mt-2">{errors.injuryType}</p>}
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">2. When was the accident?</h2>
                  {["Within 1-3 months", "Within 3-6 months", "Within 9-12 Months", "Within 24 Months"].map(option => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        name="accidentTime"
                        value={option}
                        checked={formData.accidentTime === option}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                  {errors.accidentTime && <p className="text-red-600 text-sm mt-2">{errors.accidentTime}</p>}
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Who was at fault?</h2>
                  {["No, I was not at fault", "Partially at fault", "Not sure"].map(option => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        name="fault"
                        value={option}
                        checked={formData.fault === option}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                  {errors.fault && <p className="text-red-600 text-sm mt-2">{errors.fault}</p>}
                </motion.div>
              )}
              {step === 4 && (
                <motion.div key="step4" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Medical Attention</h2>
                  {["Ambulance", "Emergency Room", "Hospital", "Doctor", "Chiropractor", "No Medical Attention Yet"].map(option => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        name="medical"
                        value={option}
                        checked={formData.medical.includes(option)}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                  {errors.medical && <p className="text-red-600 text-sm mt-2">{errors.medical}</p>}
                  <button
                    type="button"
                    onClick={goToNext}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
                  >
                    Next
                  </button>
                </motion.div>
              )}
              {step === 5 && (
                <motion.div key="step5" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Attorney Paperwork</h2>
                  {["No", "Yes"].map(option => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        name="attorney"
                        value={option}
                        checked={formData.attorney === option}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                  {errors.attorney && <p className="text-red-600 text-sm mt-2">{errors.attorney}</p>}
                </motion.div>
              )}
              {step === 6 && (
                <motion.div key="step6" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h2>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
                  />
                  {errors.fullName && <p className="text-red-600 text-sm mb-2">{errors.fullName}</p>}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code (5 digits)"
                    value={formData.zipCode}
                    onChange={(e) =>
                      /^\d{0,5}$/.test(e.target.value) &&
                      setFormData({ ...formData, zipCode: e.target.value })
                    }
                    className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
                  />
                  {errors.zipCode && <p className="text-red-600 text-sm mb-2">{errors.zipCode}</p>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded text-sm sm:text-base"
                  />
                  {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

                  <div className="flex items-start gap-2 mt-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-700">
                      By clicking “Submit”, you agree that the phone number you are providing may be
                      used to contact you by{" "}
                      <strong>Car Accident Helpline</strong> (including with auto-dialed/auto-selected
                      and prerecorded calls, as well as text/SMS messages) with information and
                      offers concerning your injuries and potential legal help. Msg. and data rates
                      apply, and your consent to such contact/marketing is not required for
                      purchase or use of services.
                    </p>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
                  >
                    Submit
                  </button>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default MultiStepForm;














