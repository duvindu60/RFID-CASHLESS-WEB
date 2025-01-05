import React from "react";
import Nav from "./Componets/Headercontent/Navbar/Nav";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Signup from "./Componets/Signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Componets/Bodycontent/Home/home";
import Coverage from "./Componets/Bodycontent/Coverage/Coverage";
import About from "./Componets/Bodycontent/About/About";
import Trends from "./Componets/Bodycontent/Trends/Trends";
import Login from "./Componets/Signup/Login";

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const noNavRoutes = ["/signup", "/login"];

  return (
    <main className="overflow-x-hidden">
      {!noNavRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trends" element={<Trends />} />
      </Routes>
    </main>
  );
};

export default App;
