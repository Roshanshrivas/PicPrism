import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import gsap from "gsap";
import toast, {Toaster} from "react-hot-toast";


const GsapTransition = () => {

    const nodeRef = useRef(null);
    const location = useLocation();
    console.log("The loaction is : ", location);

    //jab bhi location change hoga tab ye use effect run hoga, because ye useEffect hook ko ham depenedent banane wale hai location ke upper


    // When a page renders, useEffect runs first
    useEffect(() => {
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current, {opacity: 0}, {opacity: 1, duration: 1});
        }
    }, [location]);
    //when we keep dependency array empty it means that: bhai ye page call hoga jab bhi tum refresh karoge

    //For GSAP:
    //1) target
    //2) logic
    


  return (
    <div ref={nodeRef}>
     <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
