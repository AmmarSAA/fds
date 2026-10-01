/***********************
* File Name: App.jsx   *
* Author: Ammar S.A.A  *
* Output: Main Page    *
***********************/

import React, { lazy, Suspense } from "react"; // Add this line for the useState hook
import { Route, Routes } from "react-router-dom";
import Login from "./Files/login";
import Home from "./Files/home";
import Contact from "./Files/contact";
import Dishes from "./Files/dishes";
import { Barbeque } from "./Files/Barbeque";
import NotFoundPage from "./Files/404";
import NavigationMenu from "./Componenets/NavigationMenu";
import Footer from "./Componenets/Footer";

const Dominos = lazy(() => import("./Files/dominos"));
const Fishland = lazy(() => import("./Files/fishland"));
const Hitech = lazy(() => import("./Files/hitech"));
const HotelAdaab = lazy(() => import("./Files/hoteladaab"));
const HotNSpicy = lazy(() => import("./Files/hotnspicy"));
const KSBakers = lazy(() => import("./Files/ksbakers"));
const Mehfil = lazy(() => import("./Files/mehfil"));
const Mughal = lazy(() => import("./Files/mughal"));
const Paradise = lazy(() => import("./Files/paradise"));
const Platform65 = lazy(() => import("./Files/platform65"));
const RamKiBandi = lazy(() => import("./Files/ramkibandi"));
const Vantilu = lazy(() => import("./Files/ventilu"));

function App() {

  return (
    <>
      {/* Navigation Bar */}
      <NavigationMenu />

      {/* All routes */}
      <Suspense fallback={<p>Loading restaurant…</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/barbeque" element={<Barbeque />} />
        <Route path="/dominos" element={<Dominos />} />
        <Route path="/fishland" element={<Fishland />} />
        <Route path="/hitech" element={<Hitech />} />
        <Route path="/hoteladaab" element={<HotelAdaab />} />
        <Route path="/hotnspicy" element={<HotNSpicy />} />
        <Route path="/ksbakers" element={<KSBakers />} />
        <Route path="/mehfil" element={<Mehfil />} />
        <Route path="/mughal" element={<Mughal />} />
        <Route path="/paradise" element={<Paradise />} />
        <Route path="/platform65" element={<Platform65 />} />
        <Route path="/ramkibandi" element={<RamKiBandi />} />
        <Route path="/vantilu" element={<Vantilu />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App;
