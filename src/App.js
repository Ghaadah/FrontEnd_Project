import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavMenu from "./Navbar/Nav";
import Home from "./Views/Home";
import Raghad from "./Views/Raghad";
import Russ from "./Views/Russ";
import DatPage from "./Views/Dat";

function App() {
  return (
    <Router>
      <NavMenu />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dat" element={<DatPage />} />
        <Route path="/Raghad" element={<Raghad />} />
        <Route path="/Russ" element={<Russ />} />
      </Routes>
    </Router>
  );
}
export default App;
