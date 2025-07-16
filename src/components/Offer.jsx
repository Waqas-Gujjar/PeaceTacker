import React from "react";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex flex-col items-center justify-center px-4 py-10 font-sans">
      {/* Top Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-6">
          We're here to make the process easy and seamless for you and your loved ones.
        </p>
        <p className="text-gray-600 text-base sm:text-lg">
          We do the heavy lifting so you can rest easy knowing we're working hard
          to get you the <span className="font-semibold text-green-800">compensation you deserve</span>.
        </p>
      </motion.div>

      {/* Steps / Cards Section */}
      <div className="mt-12 max-w-4xl w-full cursor-pointer space-y-10">
        {[
          {
            title: "📞 CLAIM EVALUATION CALL",
            desc: `The first step in our process is reaching out to you using the contact info you provided. We'll walk you through every part of your accident and start helping you understand the REAL compensation you deserve.`,
          },
          {
            title: "📄 SUBMIT DOCUMENTS",
            desc: `Once we've gathered the key details of your accident, we'll need your help to provide documents. This is the only piece we'll need assistance with—just to complete the picture.`,
          },
          {
            title: "🔍 REVIEW YOUR DAMAGES",
            desc: `With your documents in hand, we'll match you with a Personal Injury Specialist who has specific experience in cases just like yours.`,
          },
          {
            title: "💰 GET MAX COMPENSATION",
            desc: `After meeting your Specialist, we’ll finalize the settlement or trial path to get the maximum compensation in your hands.`,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md p-6 border border-green-200 transition-all duration-300 hover:shadow-xl hover:border-green-400"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{section.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{section.desc}</p>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default ThankYouPage;
