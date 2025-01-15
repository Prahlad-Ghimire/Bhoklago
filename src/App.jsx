import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Clear from "./Clear";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Clear />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;