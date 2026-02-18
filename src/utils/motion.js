export const textVariant = (delay = 0) => ({
  hidden: { y: -30, opacity: 0 }, // was -50
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1, delay },
  },
});

export const fadeIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.5
) => {
  const dist = 40; // was 100 — large offsets can push content out of view on small screens
  return {
    hidden: {
      x: direction === "left" ? dist : direction === "right" ? -dist : 0,
      y: direction === "up" ? dist : direction === "down" ? -dist : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: { scale: 0.9, opacity: 0 }, // gentler start
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", delay, duration, ease: "easeOut" },
  },
});

export const slideIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.5
) => ({
  hidden: {
    x: direction === "left" ? "-60%" : direction === "right" ? "60%" : 0, // was 100%
    y: direction === "up" ? "60%" : direction === "down" ? "60%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
