import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import Podcast from "./components/Podcast/Podcast";
import TryPremium from "./components/TryPremium/TryPremium";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        {/* <Route path="listen/:podcastId" element={<Podcast />} /> */}
        <Route path="listen/" element={<Podcast />} />
        <Route path="premium" element={<TryPremium />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
