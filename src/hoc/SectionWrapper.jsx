import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className={`${styles.padding} max-w-7xl mx-auto relative`}>
        {/* anchor target for hash links, offset for fixed navbar */}
        <span id={idName} className="block -mt-24 pt-24" />

        <motion.div
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1, // was 0.25 — too strict on short screens
            margin: "-10% 0px -10% 0px", // trigger a bit earlier/later
          }}
          className="relative z-10"
        >
          <Component />
        </motion.div>
      </section>
    );
  };

export default SectionWrapper;
