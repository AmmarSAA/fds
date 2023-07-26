/***********************
* File Name: App.jsx   *
* Author: Ammar S.A.A  *
* Output: Main Page    *
***********************/

import React, { useState } from "react"; // Add this line for the useState hook
import { Route, Routes } from "react-router-dom";
import Login from "./Files/login";
import Home from "./Files/home";
import Contact from "./Files/contact";
import Dishes from "./Files/dishes";
import { Barbeque } from "./Files/Barbeque";
import NotFoundPage from "./Files/404";
import NavigationMenu from "./Componenets/NavigationMenu";
import Footer from "./Componenets/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationMenu />
      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/barbeque" element={<Barbeque />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
