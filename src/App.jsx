import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LinkInBioUI from "./pages/LinkInBioUi";
import BrixTempleteUi from "./pages/BrixTemplateUi";
import LondonTemplateUI from "./pages/LondonTemplateUI";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LinkInBioUI />} />
        <Route path="/brix" element={<BrixTempleteUi />} />
        <Route path="/london" element={<LondonTemplateUI />} />
      </Routes>
    </Suspense>
  );
}

export default App;
