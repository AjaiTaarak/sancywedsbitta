import React, { useEffect, useState, useRef } from "react";
import "./CountdownCard.css";

function getDaysLeft() {
  const now = new Date();
  const currentYear = now.getFullYear();
  let weddingDate = new Date(`${currentYear}-09-08T10:30:00`);
  // If today is after July 28, use next year
  if (now > weddingDate) {
    weddingDate = new Date(`${currentYear + 1}-09-08T10:30:00`);
  }
  const diff = weddingDate - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days < 10 ? `0${days}` : `${days}`;
}

const CountdownCard = () => {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft());
  const [parallax, setParallax] = useState(0);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(getDaysLeft());
    }, 1000 * 60 * 60); // update every hour
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    let ticking = false;
    let lastScrollY = 0;
    let sectionTop = 0;
    let sectionHeight = 0;

    const handleScroll = () => {
      if (!active) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = node.getBoundingClientRect();
          sectionTop = rect.top;
          sectionHeight = rect.height;
          // Calculate how far the section is in the viewport (0 = top, 1 = bottom)
          const windowHeight = window.innerHeight;
          const progress = Math.min(Math.max(1 - sectionTop / windowHeight, 0), 1);
          setParallax(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Intersection Observer to trigger effect only when in view
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);

    if (active) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Initial call
      handleScroll();
    } else {
      setParallax(0);
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  // Parallax background position (vertical movement)
  const bgPos = `center ${30 + parallax * 40}%`;

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center overflow-hidden mt-12">
      {/* Big number with image cutout */}
      <div className="relative flex flex-col items-center">
        <span
          className="countdown-cutout text-[10rem] md:text-[12rem] font-rubik-mono leading-none select-none tracking-[-0.25em] px-4"
          style={{
            backgroundImage: "url('/images/countdownbg_1.jpg')",
            backgroundPosition: bgPos,
            overflow: "visible",
            display: "inline-block",
          }}
        >
          {daysLeft}
        </span>
        <span className=" text-4xl md:text-4xl font-satisfy font-bold text-[#4B2E1E] text-center">
          Days to go!
        </span>
      </div>
      {/* Text below */}
      <div className="mt-4 flex flex-col items-center">
        <div className="text-base md:text-lg  text-[#4B2E1E] opacity-80 text-center mb-4">
         Your presence means the world to us—let us know if you’ll be there!
        </div>
      </div>
    </div>
  );
};

export default CountdownCard; 