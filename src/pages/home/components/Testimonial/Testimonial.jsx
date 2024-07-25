import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "I recently used the services of this agency, and I am thrilled with the results. The team went above and beyond to ensure that my needs were met. From the initial consultation to the final delivery, their professionalism and attention to detail were evident. They were prompt in responding to my queries and kept me informed throughout the process. The end product exceeded my expectations, and I highly recommend their services to anyone looking for top-notch quality and exceptional customer care.",
    img: "https://i.pinimg.com/474x/38/c3/1a/38c31a6305ea7ae4dacf5016676df36a.jpg",
  },
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "I have had the pleasure of working with this agency, and I can confidently say that they are a reliable and trustworthy partner. From the moment I engaged their services, they demonstrated a high level of professionalism and expertise. They listened to my requirements attentively and provided valuable insights and suggestions. The team delivered exceptional results within the agreed-upon timeframe. Their commitment to client satisfaction is commendable, and I would not hesitate to recommend them to others.",
    img: "https://i.pinimg.com/236x/17/e0/2b/17e02b5e0c567f7fef635d3c54de68e1.jpg",
  },
  {
    id: 1,
    name: "Smith - Director of Operations, New York",
    text: "I recently engaged this agency for their services, and I am extremely pleased with the outcome. Their attention to detail is second to none. They meticulously handled every aspect of the project, ensuring that nothing was overlooked. The level of care and precision they put into their work is truly remarkable. The team was professional, responsive, and dedicated to delivering a top-notch experience. I am grateful for their expertise and would highly recommend their services to anyone seeking excellence.",
    img: "https://i.pinimg.com/236x/6c/22/87/6c2287df267f74ffcff4c6d3b272e37e.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-8">
        <div className="container">
        <div className="pb-8 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              What our costumers have to say
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Here are some reviews of our costumers and their excperience
              with our services and that wee provide!
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
