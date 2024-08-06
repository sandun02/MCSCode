import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image1,image2,image3,image4, title, description,link }) => {
  return (
    <>
      <div className=" dark:text-white group">
        <div className="flex overflow-hidden">
          <img
            src={image1}
            alt="No image"
            className="mx-auto h-[220px] w-80 object-fill group-hover:scale-105 duration-300 rounded-3xl"
          />
          <img
            src={image2}
            alt="No image"
            className="mx-auto h-[200px] w-80 object-fill group-hover:scale-105 duration-300 rounded-3xl"
          />
          
          <img
            src={image3}
            alt="No image"
            className="mx-auto h-[220px] w-80 object-fill group-hover:scale-105 duration-300 rounded-3xl"
          />
          <img
            src={image4}
            alt="No image"
            className="mx-auto h-[280px] w-80 object-fill group-hover:scale-105 duration-300 rounded-3xl"
          />
          
        </div>
        <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
          <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
          <p className="line-clamp-8 text-gray-500 text-sm text-justify">{description}</p>
          <a href={link}><button className="primary-btn my-3">View Project</button></a>
          
        </div>
      </div>
    </>
  );
};

export default BlogCard;
