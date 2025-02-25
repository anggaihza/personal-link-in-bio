import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LinkInBioUI from "./pages/LinkInBioUi";
import BrixTempleteUi from "./pages/BrixTemplateUi";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LinkInBioUI />} />
        <Route path="/brix" element={<BrixTempleteUi />} />
      </Routes>
    </Suspense>
  );
}

export default App;
