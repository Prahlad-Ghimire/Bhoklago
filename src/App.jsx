import React from "react";
import { Routes, Route } from "react-router-dom";
import Clear from "./Clear";
import Contacting from "./Contacting";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Clear />} />
        <Route path="/contacting" element={<Contacting />} />
      </Routes>
    </div>
  )
}
export default App;