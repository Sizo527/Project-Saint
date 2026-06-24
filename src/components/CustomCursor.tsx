import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hovered" | "card" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // High-performance spring values for magnetic organic lag
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile and touch-only pointer devices
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    // Track mouse coordinates
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Hide custom cursor when mouse leaves the viewport
    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorType("hidden");
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setCursorType("default");
    };

    // Listen to hovering state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find the closest interactive parent
      const interactive = target.closest("button, a, [role='button'], input, textarea, select");
      const isProjectCard = target.closest("#projects .group") || target.closest(".group-hover\\:rotate-45");

      if (isProjectCard) {
        setCursorType("card");
      } else if (interactive) {
        setCursorType("hovered");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  // Render variant configurations
  const outerVariants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      borderColor: "#c5a880", // Gold accent ring
      borderWidth: 1,
    },
    hovered: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(197, 168, 128, 0.15)", // Transparent gold fill
      borderColor: "#c5a880",
      borderWidth: 1.5,
    },
    card: {
      width: 80,
      height: 80,
      backgroundColor: "#c5a880", // Solid gold fill for case studies
      borderColor: "#c5a880",
      borderWidth: 1,
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    }
  };

  return (
    <>
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={outerVariants}
        animate={cursorType}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.2,
        }}
      >
        {/* Editorial Text Badge inside the ring when hovering over project cards */}
        {cursorType === "card" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest font-black text-black select-none uppercase pointer-events-none"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
