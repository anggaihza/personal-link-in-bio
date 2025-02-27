import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LinkInBioUI from "./pages/LinkInBioUi";
import BrixTempleteUi from "./pages/BrixTemplateUi";
import LondonTemplateUI from "./pages/LondonTemplateUI";
import OliviaTemplateUi from "./pages/OliviaTemplateUi";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LinkInBioUI />} />
        <Route path="/brix" element={<BrixTempleteUi />} />
        <Route path="/london" element={<LondonTemplateUI />} />
        <Route path="/olivia" element={<OliviaTemplateUi />} />
      </Routes>
    </Suspense>
  );
}

export default App;
