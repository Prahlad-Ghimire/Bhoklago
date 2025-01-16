import React from "react";
import { Routes, Route } from "react-router-dom";
import Clear from "./Clear";
import Contacting from "./Contacting";
import AfterLoginPage from "./Pages/AfterLoginPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Clear />} />
        <Route path="/contacting" element={<Contacting />} />
        <Route path="/afterloginpage" element={<AfterLoginPage />} />
      </Routes>
    </div>
  )
}
export default App;