import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Destination from "./components/destination";
import PlaceDetails from "./components/PlaceDetails";
import StateDetails from "./components/StateDetails";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopDestinations from "./components/TopDestinations";
import Hotels from "./components/Hotel";
import AboutUs from "./components/AboutUs";
import Restaurant from "./components/Restaurants";
import Transport from "./components/transport";
import Login from "./components/login";
import Signup from "./components/Signup";
import Contact from "./components/contact";
import ExploreNearYou from "./components/Explore";
import Categories from "./components/Categories";
import CategoryDetails from "./components/CategoryDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TopDestinations />
              <Categories />
              <AboutUs />
            </>
          }
        />

        {/* MAIN ROUTES */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/state/:name" element={<StateDetails />} />

        {/* ⭐⭐ THIS ROUTE WAS MISSING (CRITICAL FIX) */}
        <Route
          path="/state/:stateName/place/:placeName"
          element={<PlaceDetails />}
        />

        <Route path="/hotel" element={<Hotels />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<ExploreNearYou />} />
        <Route path="/categories/:categoryName" element={<CategoryDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
