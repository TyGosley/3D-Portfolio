// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Staggered paragraph fade-ins */}
      <div className="mt-4 max-w-3xl space-y-6">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px]"
        >
          I’m Tyler Gosley, a Project Manager and Full Stack Web Developer based
          in Southern California, specializing in creating engaging,
          high‑performance digital experiences. My career began in the fitness
          industry, where I developed a passion for guiding others toward
          success: a passion that now fuels my approach to project management
          and development.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.25, 1)}
          className="text-secondary text-[17px] leading-[30px]"
        >
          With a degree in Education from Plymouth State University and over a
          decade of leadership experience, I combine strong communication skills
          with technical expertise in modern web technologies. I’ve managed
          complex projects, built scalable web applications, and delivered
          solutions that help businesses grow and stand out online.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.4, 1)}
          className="text-secondary text-[17px] leading-[30px]"
        >
          Beyond delivering exceptional results for my clients and teams, I’m an
          avid explorer who thrives on discovering new perspectives: whether
          through travel, hiking remote trails, or experimenting with innovative
          web design concepts.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.55, 1)}
          className="text-secondary text-[17px] leading-[30px]"
        >
          This portfolio is more than a showcase of my work; it’s an open
          invitation to collaborate. Whether you’re an employer seeking a
          dedicated team player or a business looking to bring your vision to
          life, I’d love to connect and explore how we can make it happen.
          Please feel free to reach out, and don’t hesitate to say hi!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
