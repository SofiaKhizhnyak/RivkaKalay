"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { BiPhotoAlbum } from "react-icons/bi";
import Gallery from "./Gallery";

const FancyText = ({ text }) => {
  return (
    <h1
      className="font-gveret tracking-widest text-center sm:text-[40px] text-[30px] whitespace-nowrap"
      dir="rtl"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="title-word inline-block"
          style={{ "--i": index }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleCloseGallery = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ height: "100vh", width: "100vw" }}
        animate={{ height: "auto", width: "100%" }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative border-b bg-[url('/images/bg_1.jpg')] bg-cover"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#f7f3f7] via-[#fcfcfc] to-transparent opacity-90"></div>

        <motion.div
          initial={{ opacity: 0.9, scale: 1.2, y: 50, x: "-50%" }}
          animate={{ opacity: 0, scale: 0.3, y: -30, x: "-50%" }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute top-[44%] left-1/2 
             -translate-x-1/2 -translate-y-1/2 
             text-center text-[#c9b8c9] font-extrabold 
             sm:text-[40px] text-[25px] whitespace-nowrap w-full"
        >
          <FancyText text={"טיפולי יופי מתקדמים"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 1.2, y: 50, x: "-50%" }}
          animate={{ opacity: 0, scale: 0.3, y: -30, x: "-50%" }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-1/2
             text-center text-[#b4abb4] font-gveret tracking-wide
             sm:text-[45px] text-[30px] whitespace-nowrap w-full text-shadow-sm"
        >
          סטנדרט חדש של אסתטיקה
        </motion.div>

        <div className="wrapper flex-between relative z-10">
          <div className="flex-start">
            <div href="/" className="flex-start">
              <Logo />
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            {/* Gold Gradient Applied to BiPhotoAlbum */}
            <div className="relative group flex flex-col items-center blink ">
              <svg width="50" height="50">
                <defs>
                  <radialGradient
                    id="gold-radial-gradient"
                    cx="100%"
                    cy="100%"
                    r="150%"
                    fx="100%"
                    fy="100%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#ebc312" />
                    <stop offset="25%" stopColor="#FDB931" />
                    <stop offset="50%" stopColor="#f5d832" />
                    <stop offset="75%" stopColor="#d8a434" />
                    <stop offset="100%" stopColor="#8A6E2F" />
                  </radialGradient>
                </defs>
                <BiPhotoAlbum
                  size={45}
                  className="hover:scale-110  transition-transform duration-300 blink"
                  style={{
                    fill: "url(#gold-radial-gradient)",
                  }}
                />
              </svg>

              <span className="w-[88px] rounded-lg absolute -bottom-5 -right-1 opacity-0 group-hover:opacity-80 transition-opacity duration-100 text-xs text-[#8b7f86cb]">
                גלריית עבודות
              </span>
            </div>
          </div>
        </div>
      </motion.header>
      {open && <Gallery onClose={handleCloseGallery} />}
    </>
  );
};

export default Header;
