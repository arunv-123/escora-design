import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, ChevronDown, Compass } from 'lucide-react';

const DEFAULT_IMAGES = [
  {
    url: '/images/kerala-1.png',
    alt: 'Kerala Backwaters & Houseboat',
    heightClass: 'h-[270px] sm:h-[310px] md:h-[360px]',
    archClass: 'rounded-t-[120px]',
    initialScale: 1.00,
    hoverScale: 1.50,
  },
  {
    url: '/images/kerala-2.png',
    alt: 'Western Ghats Tea Hills Munnar',
    heightClass: 'h-[320px] sm:h-[370px] md:h-[420px]',
    archClass: 'rounded-t-[160px]',
    initialScale: 1.03,
    hoverScale: 2.00,
  },
  {
    url: '/images/kerala-3.png',
    alt: 'Kerala Heritage Architecture',
    heightClass: 'h-[240px] sm:h-[280px] md:h-[320px]',
    archClass: 'rounded-t-[100px]',
    initialScale: 1.03,
    hoverScale: 1.06,
  },
  {
    url: '/images/kerala-4.png',
    alt: 'Kerala Tropical Beach Coast',
    heightClass: 'h-[300px] sm:h-[350px] md:h-[390px]',
    archClass: 'rounded-t-[150px]',
    initialScale: 1.03,
    hoverScale: 1.06,
  },
];

export default function HeroImageReveal({
  images = DEFAULT_IMAGES,
  title = "ESCORA",
  headlineText = "Kerala,",
  headlineAccent = "your way.",
  supportingText = "Private journeys, thoughtfully crafted around you.",
  duration = 1.4,
  stagger = 0.12,
  easing = [0.22, 1, 0.36, 1],
  keyTrigger = 0
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-[#f5f7fc]">

      {/* Top Navbar */}
      <motion.nav
        key={`nav-${keyTrigger}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easing }}
        className="flex items-center justify-between z-20 pb-2 border-b border-slate-200/50 relative"
      >
        {/* Brand Logo (Unchanged) */}
        <div className="text-xl sm:text-2xl font-serif font-bold tracking-[0.15em] text-slate-900 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c3a480]"></span>
          {title}
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide uppercase text-slate-700">
          <a href="#home" className="hover:text-[#c3a480] transition-colors border-b-2 border-[#c3a480] pb-0.5">Home</a>

          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#c3a480] transition-colors">
            <span>Collections</span>
            <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#c3a480] transition-colors" />
          </div>

          <a href="#explore" className="hover:text-[#c3a480] transition-colors">Explore Kerala</a>
          <a href="#journal" className="hover:text-[#c3a480] transition-colors">Journal</a>
          <a href="#about" className="hover:text-[#c3a480] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#c3a480] transition-colors">Contact</a>
        </div>

        {/* Right Conversion Area: Plan a Journey Button at Far Right */}
        <div>
          <a
            href="#plan"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#c3a480]" />
            <span>Plan a Journey</span>
          </a>
        </div>
      </motion.nav>

      {/* Center Visual Area with Staggered Arched Panels & Text Overlay */}
      <div className="relative my-auto py-2 flex flex-col items-center justify-center z-10">

        {/* Main 4 Image Panels Grid */}
        <div className="relative w-full flex items-end justify-center gap-2 sm:gap-4 md:gap-5 z-10 px-2 sm:px-4">
          {images.map((img, idx) => (
            <motion.div
              key={`${keyTrigger}-${idx}`}
              initial="rest"
              whileHover="hover"
              variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -5, scale: 1.03 }
              }}
              transition={{ duration: 0.5, ease: easing }}
              className={`relative flex-1 max-w-[130px] sm:max-w-[180px] md:max-w-[210px] ${img.heightClass} ${img.archClass} overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-shadow`}
              style={{
                clipPath: 'inset(0 0 0 0 round 100px 100px 12px 12px)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 97%)',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 97%)',
              }}
            >
              {/* Mask Container */}
              <div className="w-full h-full overflow-hidden relative">

                {/* Rising Inner Panel Entrance Animation */}
                <motion.div
                  initial={{ y: "100%", scale: 1.04 }}
                  animate={{ y: "0%", scale: 1 }}
                  transition={{
                    duration: duration,
                    delay: idx * stagger,
                    ease: easing,
                  }}
                  className="w-full h-full relative"
                >
                  <motion.img
                    src={img.url}
                    alt={img.alt || `Kerala Panel ${idx + 1}`}
                    className="w-full h-full object-cover object-center select-none"
                    variants={{
                      rest: {
                        scale: img.initialScale || 1.03,
                        transition: {
                          duration: 0.7,
                          ease: easing,
                        },
                      },
                      hover: shouldReduceMotion
                        ? {
                            scale: img.initialScale || 1.03,
                            transition: { duration: 0 },
                          }
                        : {
                            scale: [
                              img.initialScale || 1.03,
                              img.hoverScale || 1.06,
                              img.hoverScale || 1.06,
                              img.initialScale || 1.03,
                              img.initialScale || 1.03,
                            ],
                            transition: {
                              duration: 21,
                              times: [0, 10 / 21, 10.5 / 21, 20.5 / 21, 1],
                              ease: "linear",
                              repeat: Infinity,
                              repeatType: "loop",
                            },
                          },
                    }}
                    loading="eager"
                  />
                </motion.div>

              </div>
            </motion.div>
          ))}

          {/* Large OVERLAID Brand Title "ESCORA" in Deep Forest Teal-Green Tone */}
          <motion.div
            key={`title-${keyTrigger}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: easing }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <h1
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-[0.25em] text-[#142e26] drop-shadow-sm uppercase text-center select-none pl-[0.25em]"
              style={{
                WebkitTextStroke: '0.7px rgba(247, 243, 232, 0.45)',
                textShadow: '0 1px 2px rgba(247, 243, 232, 0.25)',
              }}
            >
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Main Headline & Supporting Text (Moved BELOW the 4 Image Panels) */}
        <motion.div
          key={`headline-${keyTrigger}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easing }}
          className="flex flex-col items-center text-center mt-3 z-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-slate-900 tracking-tight">
            {headlineText} <span className="italic font-serif text-[#c3a480]">{headlineAccent}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mt-1">
            {supportingText}
          </p>
        </motion.div>

      </div>

      {/* Search / Journey Bar Component matching Reference */}
      <motion.div
        key={`search-${keyTrigger}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.48, ease: easing }}
        className="z-20 pt-1"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-full p-2 sm:p-2.5 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-wrap sm:flex-nowrap items-center justify-between max-w-4xl mx-auto gap-2">

          {/* Field 1: WHERE TO */}
          <div className="flex-1 min-w-[120px] px-4 py-1.5 hover:bg-slate-50 rounded-full transition-colors cursor-pointer flex items-center gap-3">
            <MapPin className="w-4 h-4 text-slate-700 shrink-0" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">WHERE TO</div>
              <div className="text-xs text-slate-400 truncate">Where in Kerala?</div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-slate-200/80"></div>

          {/* Field 2: JOURNEY TYPE */}
          <div className="flex-1 min-w-[120px] px-4 py-1.5 hover:bg-slate-50 rounded-full transition-colors cursor-pointer flex items-center gap-3">
            <Compass className="w-4 h-4 text-slate-700 shrink-0" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">JOURNEY TYPE</div>
              <div className="text-xs text-slate-400 truncate">Choose an experience</div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-slate-200/80"></div>

          {/* Field 3: WHEN */}
          <div className="flex-1 min-w-[100px] px-4 py-1.5 hover:bg-slate-50 rounded-full transition-colors cursor-pointer flex items-center gap-3">
            <Calendar className="w-4 h-4 text-slate-700 shrink-0" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">WHEN</div>
              <div className="text-xs text-slate-400">Add dates</div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-slate-200/80"></div>

          {/* Field 4: TRAVELLERS */}
          <div className="flex-1 min-w-[100px] px-4 py-1.5 hover:bg-slate-50 rounded-full transition-colors cursor-pointer flex items-center gap-3">
            <Users className="w-4 h-4 text-slate-700 shrink-0" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">TRAVELLERS</div>
              <div className="text-xs text-slate-400">Add guests</div>
            </div>
          </div>

          {/* Search Action Button */}
          <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c3a480] hover:bg-[#b5946f] text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-amber-900/10 shrink-0 ml-auto cursor-pointer">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>
      </motion.div>

    </div>
  );
}
