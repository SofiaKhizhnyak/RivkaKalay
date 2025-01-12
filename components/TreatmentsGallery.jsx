import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TreatmentCard from "./TreatmentCard";

function TreatmentsGallery() {
  const treatments = [
    {
      name: "טיפול פנים ממצק",
      description:
        "טיפול ייחודי באמצעות מכונת גלי רדיו, המעוררת את התאים הפעילים בעומק העור למראה צעיר, מתוח ורענן.",
      image: "/images/treatments/face/rf2.jpg",
    },
    {
      name: "טיפול פנים קלאסי",
      description:
        "טיפול פנים הכולל ניקוי עמוק, פילינג, הוצאת שחורים, עיסוי מרגיע ומסכות להזנת העור.",
      image: "/images/treatments/face/4.jpg",
    },
    {
      name: "טיפול מזותרפיה",
      description:
        "טיפול לחידוש ושיפור מרקם העור, יעיל לטיפול בצלקות אקנה, מתיחה ומיצוק לעור בריא וזוהר.",
      image: "/images/treatments/face/mezo.jpg",
    },
    {
      name: "טיפול פילינג קרבוני",
      description:
        "טיפול מתקדם להסרת תאים מתים ולהמרצת זרימת הדם, המעניק מראה עור זוהר ובריא.",
      image: "/images/treatments/face/carbon.png",
    },
    {
      name: "הלחמת ריסים",
      description:
        "הלחמת ריסים מחומרים טבעיים, בשיטה מתקדמת למראה מרשים בעל נפח. הריסים מחזיקות עד כ-5 שבועות.",
      image: "/images/treatments/lashes/2.jpg",
    },
    {
      name: "איפור קבוע",
      description:
        "טכניקות איפור קבוע מתקדמות, כולל גבות בשיטת פודרה, איילינר מדויק, ושפתיים למראה מושלם.",
      image: "/images/treatments/permanent-makeup/1.jpg",
    },
    {
      name: "הרמת ריסים",
      description:
        "עיגול והרמת ריסים טבעיים בשיטה מתקדמת למראה טבעי ומורם. התוצאה מחזיקה עד כחודשיים.",
      image: "/images/treatments/lashes/3.jpg",
    },

    {
      name: "הסרת שיער בלייזר",
      description:
        "טיפול מתקדם להסרת שיער בלייזר, המבטיח תוצאות ארוכות טווח לעור חלק ונעים.",
      image: "/images/treatments/laiser/3.jpg",
    },
    {
      name: "הסרת קעקועים בלייזר",
      description:
        "טיפול מתקדם להסרת קעקועים בלייזר באופן יעיל ומדויק, עם דגש על שמירה על בריאות העור.",
      image: "/images/treatments/tattoo-remove/1.png",
    },
  ];

  return (
    <div className="pb-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="sm:text-[72px] text-[62px] font-extrabold text-[#f1da9b6b]  tracking-wider">
          הטיפולים שלנו
        </h1>
        <h1 className="font-extrabold text-5xl text-[#81817fb9] tracking-wider opacity-80 -translate-y-14">
          הטיפולים שלנו
        </h1>
      </div>

      <Carousel
        className="w-full max-w-full px-3"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {treatments.map((treatment, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TreatmentCard
                  name={treatment.name}
                  desc={treatment.description}
                  img={treatment.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-[#cf8a08b9]" />
        <CarouselNext className="text-[#cf8a08b9]" />
      </Carousel>
    </div>
  );
}

export default TreatmentsGallery;
