"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export function ParallaxBg({ 
  children, 
  baseVelocity = 2,
  className = ""
}: ParallaxProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${baseVelocity * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface FloatingShapeProps {
  x?: string;
  y?: string;
  size?: string;
  color?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingShape({
  x = "20%",
  y = "20%",
  size = "100px",
  color = "rgba(var(--primary) / 0.1)",
  delay = 0,
  duration = 20,
  className = ""
}: FloatingShapeProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        filter: "blur(50px)"
      }}
      animate={{
        y: ["0%", "10%", "0%"],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut"
      }}
    />
  );
} 