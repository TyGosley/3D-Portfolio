import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <h2 className={`${styles.sectionHeadText} mt-10`}>Technologies.</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "");