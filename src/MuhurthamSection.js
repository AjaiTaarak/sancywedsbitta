import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const MuhurthamSection = () => (
  <motion.section
    className="px-6 py-8 rounded-xl shadow-sm relative"
    initial={{ opacity: 0, y: 40 }}
    style={{ backgroundColor: '#fdf8f2', color: '#4B2E1E' }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
      <img
        src={process.env.PUBLIC_URL + '/images/jesus_cross.png'}
        alt="Ganesh"
        style={{ height: '100px', width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </div>
    <ScrollFloat
      animationDuration={0.5}
      ease="back.inOut(2)"
      scrollStart="center bottom+=100%"
      scrollEnd="bottom bottom-=20%"
      stagger={0.01}
      containerClassName="mb-2 text-center w-full"
      textClassName="text-5xl font-semibold mt-2 font-satisfy"
    >
      Engagement
    </ScrollFloat>
    <p className="mt-8 text-center w-full" style={{ color: '#4B2E1E', opacity: 0.9 }}>
    We joyfully invite you to witness the sacred celebration as they are united in Christ through the covenant of marriage.
    </p>
    {/* Custom date/time layout */}
    <div className="flex items-center justify-center my-6">
      <div className="flex-1 border-t mx-2" style={{ borderColor: '#4B2E1E' }} />
      <div className="flex flex-col items-center px-2">
        <div className="text-xs tracking-widest font-semibold mb-1" style={{ color: '#4B2E1E', opacity: 0.8 }}>SEPTEMBER</div>
        <div className="flex items-center">
          <div className="text-sm font-semibold mr-3" style={{ color: '#4B2E1E', opacity: 0.8 }}>SATURDAY</div>
          <div className="text-5xl font-bold mx-2" style={{ color: '#4B2E1E' }}>6</div>
          <div className="text-sm font-semibold ml-3" style={{ color: '#4B2E1E', opacity: 0.8 }}>AT 11:00AM</div>
        </div>
        <div className="text-xs tracking-widest font-semibold mt-1" style={{ color: '#4B2E1E', opacity: 0.8 }}>2025</div>
      </div>
      <div className="flex-1 border-t mx-2" style={{ borderColor: '#4B2E1E' }} />
    </div>
    <div className="flex justify-center">
      <button
        onClick={() => window.open("https://maps.app.goo.gl/uTtXxKFvh1JEsiKa6", "_blank")}
        className="learn-more btn-muhurtham"
      >
        View directions
      </button>
    </div>
  </motion.section>
);

export default MuhurthamSection; 