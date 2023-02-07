import React from "react";
import { testimonials } from "../Data";
import { motion } from "framer-motion";
const Testimonials = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="testimonials">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold ">Testmonials</h2>
        <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:gap-20 gap-10 sm:grid-cols-2 mb-16"
      >
        {testimonials.map((testimonial) => {
          const { id, name, image, business } = testimonial;
          return (
            <motion.div
              variants={item}
              className="relative shadow-lg p-6 hover:shadow-none"
              key={id}
            >
              <p className="text-[0.9rem] italic opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis quidem veritatis sit obcaecati enim totam repellendus
                laboriosam ad tenetur eaque.
              </p>
              <div className="mt-6">
                <div className="font-bold">{name}</div>
                <div className="text-[0.9rem] opacity-80 text-blue">
                  {business}
                </div>
              </div>
              <div className="absolute w-16 h-16 bottom-[1.2rem] right-[2rem]">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="text-center">
        <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-2">
          Wanna Start Work with me?
        </div>
        <p className="text-[0.9rem] opacity-80 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <a href="#contact" className="text-[0.9rem] text-blue">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
