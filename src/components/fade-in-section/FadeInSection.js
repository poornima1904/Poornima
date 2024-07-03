"use client";
import React from "react";
import { motion } from "framer-motion";

const initial = { opacity: 0, y: 16 };
const whileInView = { opacity: 1, y: 0 };

const FadeInSection = React.forwardRef(
  ({ children, className = "", delay = 0, style = {}, id = "" }, ref) => {
    return (
      <motion.div
        id={id}
        ref={ref}
        className={className}
        style={style}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ delay, damping: 10 }}
      >
        {children}
      </motion.div>
    );
  }
);

FadeInSection.displayName = "FadeInSection";

export default FadeInSection;
