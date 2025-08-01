import React from 'react';
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const goToPrivacyPolicy = () => {
    navigate("/PrivacyPolicy");
  };

  const goToTerms = () => {
    navigate("/TermsandConditions");
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
          <a
            href="/PrivacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>
          <a
            href="/TermsandConditions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
