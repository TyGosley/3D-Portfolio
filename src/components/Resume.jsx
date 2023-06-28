import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import tylerGResume from "../assets/tylerGResume.pdf";


const Resume = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Click to Download</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Tyler's Resume</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <motion.div
          variants={fadeIn("", "spring", 0, 0.75)}
          className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-1/2 mx-auto"
        >
          <div className="flex justify-center items-center">
            <a
              href={tylerGResume}
              download="tylerGResume.pdf"
              className="text-white font-black text-[48px]"
            >
              <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
