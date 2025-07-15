import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#02193b] text-white py-6 px-4">
      <div className="max-w-6xl mt-10 mx-auto text-center">
        {/* Disclaimer text */}
        <p className="text space-y-0">
          This is an advertisement. Top Injury Claims is responsible for ad content. Top Injury Claims is not a law firm or referral service and does not provide legal advice. This is a free matching service. Information you submit will be shared with third-party attorney(s). We do not evaluate your legal situation when determining which attorney will receive your information. We do not recommend or endorse any attorneys that pay to participate. No representation is made about the quality of legal services or the qualifications of advertising attorneys. An attorney-client relationship is not formed when you submit information through the form. The hiring of a lawyer is a critical decision and should not be predicated solely on comments, advertisements or other content found on any website. You are under no obligation to retain a lawyer who contacts you through this service.
        </p>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-120 mt-20 text-sm font-medium">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
