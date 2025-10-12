import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function variants(type) {
  switch (type) {
    case "slide-up":    return { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
    case "slide-left":  return { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } };
    case "slide-right": return { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } };
    case "zoom":        return { hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } };
    case "fade":
    default:            return { hidden: { opacity: 0 }, show: { opacity: 1 } };
  }
}

/** Animate a section when it enters the viewport */
export function AnimatedSection({
  children,
  type = "slide-up",
  amount = 0.25,   // how much of the element must be visible (0..1)
  once = true,
  delay = 0,
  duration = 0.6,
  className = "",
}) {
  const prefersReduced = useReducedMotion();
  const v = variants(type);

  const transition = prefersReduced ? { duration: 0 } : { duration, ease: EASE, delay };

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView={prefersReduced ? undefined : "show"}
      animate={prefersReduced ? "show" : undefined} // respect reduced motion
      viewport={{ once, amount }}
      variants={v}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}

/** Stagger children in a grid/list */
export function Stagger({ children, gap = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

/** Child item for Stagger */
export function Item({ children }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, duration = 0.25 }) {
  const prefersReduced = useReducedMotion();
  const t = prefersReduced ? 0 : duration;
  return (
    <motion.main
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}