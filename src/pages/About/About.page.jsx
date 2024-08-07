import React, { useEffect, useRef } from "react";

import { useAnimation, useInView, motion } from "framer-motion";

import TeamMember1 from "@/assets/Team/sandun.png";
import TeamMember2 from "@/assets/Team/nimesh.png";
import TeamMember3 from "@/assets/Team/migara.png";
import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'


function About (){


  return (
    <div>
      <div className="max-w-screen overflow-hidden font-poppins">

            <section className="max-w-8xl mx-auto container bg-white pt-16">
              <div className="">
                <div
                  role="contentinfo"
                  className="flex items-center flex-col px-4"
                >
        
                  <h1
                    tabIndex={0}
                    className=" flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-6xl text-3xl text-center pb-12"
                  >
                    Who are wee and whay are wee so good ?
                  </h1>
                  <p
                    tabIndex={0}
                    className="sm:flex border-y-2 py-4 border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%] "
                  >
                    Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges. By
                leveraging the latest advancements and continuous innovation, we
                pave the way for businesses to thrive in today's ever-evolving
                landscape. At our site, we believe that success lies in
                harnessing the power of technology and data to drive meaningful
                outcomes. Whether you're a small startup or a large enterprise,
                our comprehensive range of services and solutions is designed to
                meet your unique needs. From advanced algorithms and powerful
                analytics capabilities to seamless technology integration and
                ongoing support from our trained personnel, we are dedicated to
                helping businesses grow and succeed. Join us on this
                transformative journey, and together, we will propel your
                business to new heights of success.
                  </p>
                </div>
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
                >
                </div>
                </div>
            </section>

        {/* teams section */}
        <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                OUR TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes that make it all Work!
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                
                
                
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={TeamMember1}
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Sandun Nayanajith
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Principal Software Developer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.An avid open-source developer who loves to be creative
                        and inventive.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={TeamMember2}
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Nimesh Dulearn
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Marketing Manager & UX Designer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Product designer with interests in immersive computing
                        and XR, political ventures, and emerging technologies.
                        Able to take ideas and give them a life.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={TeamMember3}
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Dakshina Migara
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                      Product Designer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        A UX designer is the voice of the customer. Our job is
                        to look beyond the business goals. We don't just
                        experience user interface but also questions it.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* teams section end */}
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        
      </div>
      
    </div>
  );
};



export default About;
