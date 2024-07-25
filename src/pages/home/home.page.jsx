import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo";
import Services from "./components/Services/Services";
import BlogsComp from "./components/Blogs/BlogsComp";
import Testimonial from "./components/Testimonial/Testimonial";
import CardComponent from "./components/Price/CardComponent";

function HomePage() {
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
        <div>
           <Hero/> 
           <BrandsLogo/>
           <Services/>
           <BlogsComp/>
           <CardComponent/>
           <Testimonial/>
        </div>

    );
}
export default HomePage;