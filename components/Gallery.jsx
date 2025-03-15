import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";

function Gallery({ onClose }) {
  const images = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
    "/images/gallery/7.png",
    "/images/gallery/8.png",
    "/images/gallery/9.png",
    "/images/gallery/10.png",
    "/images/gallery/11.png",
    "/images/gallery/12.png",
    "/images/gallery/13.png",
    "/images/gallery/14.png",
    "/images/gallery/15.png",
    "/images/gallery/16.png",
  ];
  return (
    <div className="fixed inset-0 z-50 bg-[#000000b3] flex-center">
      <Carousel
        className="w-10/12 "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <IoCloseCircleOutline
          size={32}
          className="text-white p-1 hover:cursor-pointer hover:scale-110"
          onClick={() => onClose()}
        />
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt="beauty treatment"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#fff9ff96] opacity-90" />
        <CarouselNext className="bg-[#fff9ff96]  opacity-90" />
      </Carousel>
    </div>
  );
}

export default Gallery;
