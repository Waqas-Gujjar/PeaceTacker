import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [1, 2, 3, 4, 5, 6];

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
  const [formData, setFormData] = useState({
    injuryType: [],
    accidentTime: "",
    fault: "",
    medical: [],
    attorney: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const goToNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const goToPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "injuryType" || name === "medical") {
      const updatedArray = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep = () => {
    if (step === 1 && formData.injuryType.length === 0) return false;
    if (step === 4 && formData.medical.length === 0) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.fullName.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.injuryType.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
    console.log(formData);

    setTimeout(() => {
      navigate("/offers");
    }, 1500);
  };

  const progressPercent = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow-2xl mt-8 sm:mt-12"
    >
      {/* Progress Bar */}
      {!submitted && (
        <div className="relative mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden" />
          <motion.div
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <div className="absolute top-0 left-0 w-full h-3 flex justify-between items-center px-2 text-xs text-white font-semibold pointer-events-none">
            <span>Step {step}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
        </div>
      )}

      {/* Form Area */}
      <form onSubmit={handleSubmit}>
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
              <div className="text-sm mt-2 text-gray-500">Redirecting...</div>
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div key="step1" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">1. How were you hurt?</h2>
                  {["Automobile Accident", "Medical Negligence", "Slip & Fall", "Other"].map(
                    (option) => (
                      <label key={option} className="block mb-2 text-base">
                        <input
                          type="checkbox"
                          name="injuryType"
                          value={option}
                          checked={formData.injuryType.includes(option)}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    )
                  )}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">2. When did the accident happen?</h2>
                  {["1-3 months ago", "3-6 months ago", "6-12 months ago", "Within 2 years"].map(
                    (option) => (
                      <label key={option} className="block mb-2 text-base">
                        <input
                          type="radio"
                          name="accidentTime"
                          value={option}
                          checked={formData.accidentTime === option}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    )
                  )}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">3. Was it your fault?</h2>
                  {["No", "Partially", "Not sure"].map((option) => (
                    <label key={option} className="block mb-2 text-base">
                      <input
                        type="radio"
                        name="fault"
                        value={option}
                        checked={formData.fault === option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">4. Did you get medical attention?</h2>
                  {["Ambulance", "ER", "Hospital", "Doctor", "Chiropractor", "No"].map(
                    (option) => (
                      <label key={option} className="block mb-2 text-base">
                        <input
                          type="checkbox"
                          name="medical"
                          value={option}
                          checked={formData.medical.includes(option)}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    )
                  )}
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">5. Signed any legal paperwork?</h2>
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="block mb-2 text-base">
                      <input
                        type="radio"
                        name="attorney"
                        value={option}
                        checked={formData.attorney === option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </motion.div>
              )}

              {step === 6 && (
                <motion.div key="step6" {...motionProps}>
                  <h2 className="text-xl font-bold mb-4">6. Contact Details</h2>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
                  >
                    Submit
                  </button>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="text-sm px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                )}
                {step < 6 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep()) goToNext();
                      else alert("Please fill required info.");
                    }}
                    className="ml-auto text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default MultiStepForm;
