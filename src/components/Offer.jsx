import React from "react";

const offers = [   // lowercase 'offers'
  {
    logo: "https://i.imgur.com/xFQQV7c.png",
    title: "Complete Car WARRANTY",
    subtitle: "Get full protection for up to 60% off before unexpected auto repair costs you thousands",
    bullets: [
      "Don't fall victim to expensive car repairs",
      "Get unlimited repair claims",
      "Accepted at all dealers and mechanics"
    ],
  },
  {
    logo: "https://i.imgur.com/hMLx4pz.png",
    title: "Walmart MoneyCard",
    subtitle: "Earn cash back with the Walmart MoneyCard",
    bullets: [
      "3% cash back at Walmart.com",
      "2% cash back at Walmart fuel stations",
      "1% cash back at Walmart stores; up to $75/year"
    ],
  },
  {
    logo: "https://i.imgur.com/mtGZfW1.png",
    title: "CreditBuilderIQ",
    subtitle: "Build Credit the Smart Way",
    bullets: [
      "Credit Report and Score",
      "7 Day Trial",
      "Build Your Credit",
      "Dispute credit inaccuracies"
    ],
  },
  {
    logo: "https://i.imgur.com/ZhW9grG.png",
    title: "atlaswizard",
    subtitle: "Insurance made easy!",
    bullets: [
      "Find out if you may be able to save on your auto insurance",
      "Discover your best options",
      "Explore insurance companies head-to-head"
    ],
  },
];

const Offer = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-2">
        Unfortunately, Your Accident Doesn't Qualify For Our Assistance
      </h2>
      <p className="text-center text-lg font-semibold text-gray-700 mb-8">
        However, We Have Some Special Offers From Our Partners As A{" "}
        <a href="#" className="text-blue-600 underline">Thank You</a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden flex flex-col"
          >
            <div className="h-30 flex items-center justify-center border-b border-gray-300  p-4">
              <img src={offer.logo} alt={offer.title} className="max-h-12 object-contain" />
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <p className="text-sm font-semibold text-blue-600 mb-2">{offer.subtitle}</p>
              <ul className="text-sm font-semibold text-gray-800 list-disc list-inside space-y-1 mb-4">
                {offer.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-auto">
                GET STARTED
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
