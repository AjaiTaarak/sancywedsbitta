import React from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const HeroSection = () => (
  <motion.section
    className="relative w-full h-[75vh] min-h-[400px] flex items-end justify-end overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={process.env.PUBLIC_URL + "/images/couple_1.jpeg"}
      alt="Couple"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    {/* Gradient overlay for text visibility */}
    <div className="absolute inset-0 z-10 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)"}} />
    <div className="absolute bottom-8 right-8 z-20 text-right w-full flex flex-col items-end">
    <BlurText
        text="the couple"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl md:text-2xl font-satisfy text-pink-100 drop-shadow-lg"
      />
      <BlurText
        text="Sancy ❤️ Bitta"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl md:text-4xl font-satisfy text-pink-100 drop-shadow-lg"
      />
    </div>
  </motion.section>
);

export default HeroSection; 