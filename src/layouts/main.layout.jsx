import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/shared/Navbar";

import { Outlet } from "react-router-dom";

import Footer from "@/components/shared/Footer/Footer";

function MainLayout(){
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
    return(
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          
          <Navbar/> 
          <Outlet/>
          <Footer/>
        </div>
    );
}

export default MainLayout;