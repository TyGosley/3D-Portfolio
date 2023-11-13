// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello there, my name is Tyler Gosley, a dedicated Project Manager and
        Full Stack Web Developer based in Southern California. Originally from
        Vermont, I earned my degree in Education from Plymouth State University.
        Over the past 10 years, I've ventured into various fields, starting with
        a fulfilling journey in the fitness industry. There, I helped
        individuals achieve remarkable results, fostering better health and
        confidence. My passion for technology eventually led me to pursue a
        career as a Full Stack Web Developer. I'm excited to share that I am now
        a dedicated Project Manager, bringing together my development skills
        with over a decade of experience in guiding others towards success.
        Beyong the professional realm, I'm an avid explorer who enjoys staying
        active and uncovering new places. Thru-hiking is one of my favorite
        hobbies, providing me with incredible adventures and stories to share.
        However, the most cherished moments are those spent with friends and
        family. Thank you for taking the time to learn more about me. Feel free
        to explore my portfolio, and don't hesitate to reach out if you have any
        questions or would like to connect!
      </motion.p>

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
