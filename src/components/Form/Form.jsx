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
    injuryType: "",
    accidentTime: "",
    fault: "",
    medical: [],
    attorney: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const goToNext = () => setStep((prev) => Math.min(prev + 1, steps.length));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedMedical = checked
        ? [...formData.medical, value]
        : formData.medical.filter((item) => item !== value);
      setFormData({ ...formData, medical: updatedMedical });
      if (checked) goToNext();
    } else {
      setFormData({ ...formData, [name]: value });
      goToNext();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);

    setTimeout(() => {
      navigate("/offers");
    }, 1500);
  };

  const progressPercent = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-xl mt-6 sm:mt-10 w-full">
      {/* Progress Bar */}
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
            <span>Step {step} of {steps.length}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
        </div>
      )}

      {/* Form */}
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
              <div className="text-sm mt-2 text-gray-500">Redirecting to offers...</div>
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div key="step1" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">1. How were you hurt?</h2>
                  {[
                    "Automobile Accident",
                    "Medical Negligence",
                    "Slip & Fall",
                    "Other Injury or Accident",
                  ].map((option) => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        name="injuryType"
                        value={option}
                        checked={formData.injuryType === option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">2. How long ago was your accident?</h2>
                  {[
                    "Within 1-3 months",
                    "Within 3-6 months",
                    "Within 9-12 Months",
                    "Within 24 Months",
                  ].map((option) => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
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
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Was the accident your fault?</h2>
                  {["No, I was not at fault", "Partially at fault", "Not sure"].map((option) => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
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
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Did you receive medical attention?</h2>
                  {[
                    "Ambulance",
                    "Emergency Room",
                    "Hospital",
                    "Doctor",
                    "Chiropractor",
                    "No Medical Attention Yet",
                  ].map((option) => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
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
                  ))}
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" {...motionProps}>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Have you signed any paperwork with an attorney?</h2>
                  {["No", "Yes"].map((option) => (
                    <label key={option} className="block mb-2 text-sm sm:text-base">
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
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Contact Details</h2>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base"
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
