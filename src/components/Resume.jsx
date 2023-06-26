import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Resume = () => {
  return (
    <div className="bg-black-100 rounded-[20px] p-6">
      <div className="bg-tertiary rounded-2xl p-4">
        <p className="text-white text-center text-lg font-medium">Download My Resume</p>
        <h2 className="text-white text-center text-3xl font-bold">Resume</h2>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="/path/to/your/resume.pdf"
          download="resume.pdf"
          className="flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "");
