import React from "react";

import { GiNotebook } from "react-icons/gi";
import { RiTerminalBoxFill } from "react-icons/ri";
import { RiWindowFill } from "react-icons/ri";
import { RiVipCrownFill } from "react-icons/ri";

const skillsData = [
  {
    name: "WebSite Design & Development",
    icon: <RiTerminalBoxFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "We help your business grow by designing custom web apps with attractive designs and rich functionality. Our approach includes building a strong infrastructure, ensuring seamless user interactions, optimizing performance, and providing ongoing support. We use thorough market research and the latest technologies to deliver solutions that exceed your business objectives.",
    aosDelay: "0",
  },
  {
    name: "Desktop App Development",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "We develop tailored desktop applications to meet your business needs, featuring intuitive interfaces, seamless system integration, and robust security. Our focus on performance and reliability enhances productivity and streamlines operations. We ensure thorough testing, user training, and ongoing maintenance, leveraging the latest technologies and best practices to empower your business and achieve its goals.",
    aosDelay: "300",
  },
  {
    name: "Logo Designing",
    icon: <RiVipCrownFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "Logo design creates a unique symbol representing a brand, focusing on instant recognition and conveying its essence and values. A good logo is simple, versatile, scalable, and consistent with the brand’s visual language, enhancing recognition and trust. It involves collaboration to ensure alignment with the brand’s goals and vision.",
    aosDelay: "500",
  },
  {
    name: "Fb Bisiness Post Designing",
    icon: <RiWindowFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "Designing a Facebook post involves creating visually appealing, engaging content with high-quality images, compelling headlines, and relevant information. Key considerations include maintaining brand identity, optimizing for mobile, including clear calls to action, and encouraging interaction. Analyzing performance metrics and adjusting strategies based on insights can further enhance effectiveness.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-justify">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <a href="/services">
            <button className="primary-btn">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
