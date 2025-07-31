import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Offer from "./components/Offer.jsx"; // default export
import Policy from "./components/pages/Privacy.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Offers" element={<Offer />} />
            <Route path="/PrivacyPolicy" element={<Policy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
