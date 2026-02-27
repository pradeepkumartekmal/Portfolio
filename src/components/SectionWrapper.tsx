import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  zoom?: boolean;
}

const SectionWrapper = ({ 
  children, 
  id, 
  className = "", 
  delay = 0, 
  direction = "up",
  zoom = false 
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: zoom ? 0.8 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
