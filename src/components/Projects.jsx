/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.6)}>
      <Tilt
        options={{ max: 15, scale: 1, speed: 350 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <button
              type="button"
              onClick={() =>
                window.open(source_code_link, "_blank", "noopener,noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={`${name} source code on GitHub`}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(deployed_link, "_blank", "noopener,noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
              aria-label={`${name} live demo`}
            >
              <FiArrowUpRight className="text-white" size={18} />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my skills and experience through real-world
          examples of my work. Each project is briefly described and includes
          links to code repositories and live demos. They showcase my ability to
          solve problems, work with various technologies, and effectively manage
          projects.
        </motion.p>
      </div>

      <div
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10"
        aria-label="Project cards grid"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
