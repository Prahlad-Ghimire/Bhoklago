import React from "react";
import { Routes, Route } from "react-router-dom";
import Clear from "./Clear";
import Contacting from "./Contacting";
import Loginsuccess from "./loginsuccess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Clear />} />
        <Route path="/contacting" element={<Contacting />} />
        <Route path="/loginsuccess" element={<Loginsuccess />}/>
      </Routes>
    </div>
  )
}
export default App;