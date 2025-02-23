import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LinkInBioUI from "./pages/LinkInBioUi";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/personal-link-in-bio" element={<LinkInBioUI />} />
      </Routes>
    </Suspense>
  );
}

export default App;
