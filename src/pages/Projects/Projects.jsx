import React from "react";
import BlogCard from "@/pages/Projects/ProjectCard";
import RImg1 from "@/assets/Projects/RBookings.png";
import RImg2 from "@/assets/Projects/RAdmin.png";
import RImg3 from "@/assets/Projects/RBookingCar.png";
import RImg4 from "@/assets/Projects/RAddNewCar.png";
import WImg1 from "@/assets/Projects/WHome.png";
import WImg2 from "@/assets/Projects/WAdmin.png";
import WImg3 from "@/assets/Projects/WJobAppli.png";
import WImg4 from "@/assets/Projects/WPostJobs.png";
import VImg1 from "@/assets/Projects/VHome.png";
import VImg2 from "@/assets/Projects/VDes.png";
import VImg3 from "@/assets/Projects/VContact.png";
import VImg4 from "@/assets/Projects/VBooking.png";
import MImg1 from "@/assets/Projects/MHome.png";
import MImg2 from "@/assets/Projects/MLogins.png";
import MImg3 from "@/assets/Projects/MSeets.png";
import MImg4 from "@/assets/Projects/MMovies.png";



const BlogsData = [
  {
    id: 1,
    image1: RImg1,
    image2: RImg2,
    image3: RImg3,
    image4: RImg4,
    title: "RunVista - Car rental service platform",
    description:
      "RunVista is an innovative car rental service platform designed to offer seamless experiences for both users and administrators. Users can easily log in to the platform using their credentials, allowing them to access a wide range of features. Once logged in, users can browse available cars using a sophisticated filter function, enabling them to find the perfect vehicle based on criteria such as make, model, year, and rental rates. Booking a car is a straightforward process, with users able to select their desired vehicle, choose rental dates, and complete the reservation in just a few clicks. Additionally, users can view their booking history, providing a convenient way to track past rentals and manage future reservations.The platform also includes a Contact Us page, where users can reach out to administrators for assistance, inquiries, or feedback. This ensures that users receive the support they need, enhancing overall customer satisfaction. For administrators, RunVista offers robust management tools to efficiently oversee the rental operations. Admins can log in to access their dashboard, where they can add new cars to the inventory, update existing car details, and delete cars that are no longer available for rental. Administrators can also view all user bookings, enabling them to monitor rental trends, manage reservations, and generate insightful reports.Furthermore, RunVista incorporates secure payment processing, allowing users to complete transactions with confidence. The platform's architecture leverages modern web technologies such as React for the frontend, Node.js for the backend, and MongoDB for data storage, ensuring a responsive, scalable, and reliable service. The integration of advanced features like real-time availability updates, user authentication, and data encryption underscores RunVista's commitment to providing a secure and user-friendly car rental experience. With its comprehensive suite of features and user-centric design, RunVista is poised to revolutionize the car rental industry.",
    author: "Sandun",
    date: "April 22, 2024",
    link:"https://waveai.netlify.app/",
  },
  {
    id: 2,
    image1: WImg1,
    image2: WImg2,
    image3: WImg3,
    image4: WImg4,
    title: "WaveAI - Job hiring Website",
    description:
      "This WaveAI AI-powered job hiring site using the MERN stack, designed to streamline the recruitment process. Recruiters can post job listings and role-specific questions, while candidates can view these jobs and provide answers. A fine-tuned AI model analyzes the responses, categorizing them into three categories: good, moderate, and bad, which are then presented to recruiters for easy evaluation. The platform features robust authentication and authorization processes to ensure the security and privacy of user data. Additionally, the site includes a user-friendly interface, advanced search capabilities, and real-time notifications to enhance the user experience for both recruiters and candidates. Recruiters can also track the performance of their job listings and candidate responses through detailed analytics. This innovative system not only simplifies the hiring process but also provides a reliable way to assess candidate suitability, ultimately saving time and improving hiring decisions.",
    author: "Sandun ",
    date: "July 22, 2024",
    link:"https://waveai.netlify.app/",
  },
  {
    id: 3,
    image1: VImg1,
    image2: VImg2,
    image3: VImg3,
    image4: VImg4,
    title: "VentureVista - Travel Agency WebSite",
    description:
      "VentureVista is a comprehensive travel agency website designed to cater to travelers seeking a wide range of travel services and information. Created with the modern traveler in mind, VentureVista offers a seamless platform for booking various travel services, from flights and accommodations to tours and activities. Users can easily browse and view detailed travel packages, which include curated itineraries, exclusive deals, and destination highlights, ensuring they find the perfect travel experience tailored to their preferences and budget. The platform also facilitates efficient user-admin communication through a dedicated Contact Us page, allowing travelers to reach out for personalized assistance, inquiries, and support.To enhance user experience, VentureVista incorporates advanced search and filtering options, enabling travelers to find exactly what they are looking for with ease. The platform's user-friendly interface ensures smooth navigation, while secure payment processing guarantees safe transactions for all bookings. Administrators can manage travel packages, update information, and respond to user queries efficiently through an intuitive admin dashboard. Additionally, VentureVista features user reviews and ratings for travel packages, providing valuable insights and helping users make informed decisions. Built using state-of-the-art web technologies, VentureVista promises a reliable, responsive, and engaging travel planning experience, making it an indispensable tool for all travel enthusiasts.",
    author: "Someone",
    date: "April 22, 2022",
    link:"https://sandun02.github.io/VentureVista/",
  },
  {
    id: 4,
    image1: MImg1,
    image2: MImg2,
    image3: MImg3,
    image4: MImg4,
    title: "VentureVista - Travel Agency WebSite",
    description:
      "VentureVista is a comprehensive travel agency website designed to cater to travelers seeking a wide range of travel services and information. Created with the modern traveler in mind, VentureVista offers a seamless platform for booking various travel services, from flights and accommodations to tours and activities. Users can easily browse and view detailed travel packages, which include curated itineraries, exclusive deals, and destination highlights, ensuring they find the perfect travel experience tailored to their preferences and budget. The platform also facilitates efficient user-admin communication through a dedicated Contact Us page, allowing travelers to reach out for personalized assistance, inquiries, and support.To enhance user experience, VentureVista incorporates advanced search and filtering options, enabling travelers to find exactly what they are looking for with ease. The platform's user-friendly interface ensures smooth navigation, while secure payment processing guarantees safe transactions for all bookings. Administrators can manage travel packages, update information, and respond to user queries efficiently through an intuitive admin dashboard. Additionally, VentureVista features user reviews and ratings for travel packages, providing valuable insights and helping users make informed decisions. Built using state-of-the-art web technologies, VentureVista promises a reliable, responsive, and engaging travel planning experience, making it an indispensable tool for all travel enthusiasts.",
    author: "Someone",
    date: "April 22, 2022",
    link:"https://waveai.netlify.app/",
  },
];

const BlogsComp = () => {

  

  

  
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-8 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50  pl-2 text-3xl font-semibold">
          Where We Turned Ideas into Reality
          </h1>
          <p
              className="text-gray-600 dark:text-gray-400 text-lg py-3"
            >
              Featured Website Design Projects
            </p>
          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Projects</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
