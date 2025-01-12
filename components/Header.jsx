"use client";
import { useState } from "react";
import Logo from "./Logo";
import { BiPhotoAlbum } from "react-icons/bi";
import Gallery from "./Gallery";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleCloseGallery = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="relative w-full border-b bg-[url('/images/bg_1.jpg')] bg-cover ">
        <div className="absolute inset-0 bg-gradient-to-l from-[#f7f3f7] via-[#fcfcfc] to-transparent opacity-90"></div>
        <div className="wrapper flex-between relative z-10">
          <div className="flex-start">
            <div href="/" className="flex-start">
              <Logo />
            </div>
          </div>
          <div className="relative group flex flex-col items-center">
            <BiPhotoAlbum
              onClick={() => setOpen(!open)}
              size={45}
              className="hover:text-[#f1da9bee] text-[#beb4a8b7] hover:scale-110 cursor-pointer"
            />
            <span className="w-[88px]  rounded-lg absolute -bottom-5 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-sm text-[#8b7f86cb]">
              גלריית עבודות
            </span>
          </div>
        </div>
      </header>
      {open && <Gallery onClose={handleCloseGallery} />}
    </>
  );
};

export default Header;
