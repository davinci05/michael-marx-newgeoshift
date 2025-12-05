import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MarketsPage from "./pages/MarketsPage";
import ContactPage from "./pages/ContactPage"; // your existing Contact page

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* simple placeholder for now */}
          <Route
            path="/ngs-my-story"
            element={
              <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
                <p className="text-gray-400">
                  NGS – My Story page coming soon.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
