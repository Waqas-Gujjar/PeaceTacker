import React from 'react';
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/PrivacyPolicy");
  };

  return (
    <footer className="bg-[#02193b] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Disclaimer */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          This is an advertisement. Picasetakers is responsible for ad content. Picasetakers is not a law firm or referral service and does not provide legal advice. This is a free matching service. Information you submit will be shared with third-party attorney(s). We do not evaluate your legal situation when determining which attorney will receive your information. We do not recommend or endorse any attorneys that pay to participate. No representation is made about the quality of legal services or the qualifications of advertising attorneys. An attorney-client relationship is not formed when you submit information through the form. The hiring of a lawyer is a critical decision and should not be predicated solely on comments, advertisements or other content found on any website. You are under no obligation to retain a lawyer who contacts you through this service.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-60 text-sm font-medium text-gray-200">
          <button onClick={handleSubmit} className="hover:underline bg-transparent border-none cursor-pointer">
             Privacy Policy
          </button>
          <button onClick={handleSubmit} className="hover:underline bg-transparent border-none cursor-pointer">
           Terms and Conditions
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
