import React, { useState } from "react";
import { motion } from "framer-motion";

const supportsAspectRatio = CSS.supports("aspect-ratio", "1 / 1");

const BrideSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      className="px-6 py-8 bg-pink-50/50 shadow-sm relative flex flex-col items-center"
      style={{ backgroundColor: '#fdf8f2' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {!supportsAspectRatio && (
        <p className="browser-warning text-xs text-red-500 mb-4">
          If this looks wonky to you it's because this browser doesn't support the CSS property 'aspect-ratio'.
        </p>
      )}
      <div
        className="stack mx-auto mb-8 relative"
        style={{ width: '80%', maxWidth: 400, cursor: 'pointer', height: 'auto' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Card before (bottom) */}
        <div
          className="absolute inset-0"
          style={{
            border: '4px solid',
            backgroundColor: '#fff',
            aspectRatio: '3 / 2',
            zIndex: 1,
            boxSizing: 'border-box',
            padding: '5% 5% 15% 5%',
            height: '100%',
            width: '100%',
            transform: hovered
              ? 'translateY(-2%) rotate(-4deg)'
              : 'translateY(-2%) rotate(-6deg)',
            transition: 'transform 0.15s ease',
            top: 0,
            left: 0,
          }}
        />
        {/* Card after (middle) */}
        <div
          className="absolute inset-0"
          style={{
            border: '4px solid',
            backgroundColor: '#fff',
            aspectRatio: '3 / 2',
            zIndex: 2,
            boxSizing: 'border-box',
            padding: '5% 5% 15% 5%',
            height: '100%',
            width: '100%',
            transform: hovered
              ? 'translateY(2%) rotate(4deg)'
              : 'translateY(2%) rotate(6deg)',
            transition: 'transform 0.15s ease',
            top: 0,
            left: 0,
          }}
        />
        {/* Main card (top) */}
        <div
          className="relative z-10"
          style={{
            aspectRatio: '3 / 2',
            border: '4px solid',
            backgroundColor: '#fff',
            padding: '5% 5% 15% 5%',
            transition: 'transform 0.25s ease',
            transform: hovered ? 'rotate(5deg)' : 'none',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="image relative z-10"
            style={{
              width: '100%',
              border: '4px solid',
              backgroundColor: '#eee',
              aspectRatio: '1 / 1',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/bride_1.jpeg"}
              alt="Bride"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold font-satisfy text-pink-600 mb-4 text-center w-full">About our Sancy</h2>
      <p className="text-gray-500 text-l text-center w-full">Sancy is an artist from Kochi, known for her creativity and kindness. Her family cherishes their cultural roots and welcomes everyone with open arms.</p>
    </motion.section>
  );
};

export default BrideSection; 