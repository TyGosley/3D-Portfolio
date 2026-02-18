import { motion } from "framer-motion";
import { styles } from "../styles";
import { VapeWaveMtns } from "./canvas";

// Base shimmer style
const shimmerStyle = {
  background: "linear-gradient(90deg, #915EFF, #b78aff, #915EFF)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s ease-in-out infinite, glow 4s ease-in-out infinite",
  cursor: "pointer",
  display: "inline-block",
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Animated Dot & Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-5 h-5 rounded-full bg-[#915EFF]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-1 violet-gradient"
            initial={{ height: 0 }}
            animate={{ height: "20rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Hero Text */}
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Where{" "}
            <motion.span
              style={shimmerStyle}
              className="shimmer-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              Vision
            </motion.span>{" "}
            Meets{" "}
            <motion.span
              style={shimmerStyle}
              className="shimmer-text"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Code
            </motion.span>
          </motion.h1>

          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            A portfolio of projects, passion, and problem-solving —
            <br className="sm:block hidden" />
            designed to impress, inspire, and deliver results.
          </motion.p>
        </div>
      </div>

      <VapeWaveMtns />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px rgba(145,94,255,0.5), 0 0 10px rgba(145,94,255,0.4); }
            50% { text-shadow: 0 0 12px rgba(145,94,255,0.8), 0 0 20px rgba(145,94,255,0.6); }
          }

          .shimmer-text {
            animation: shimmer 3s ease-in-out infinite, glow 4s ease-in-out infinite;
            transition: animation-duration 0.3s ease, transform 0.2s ease;
          }

          .shimmer-text:hover {
            animation-duration: 1.5s, 2s;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
