import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import { FiHeart } from "react-icons/fi";

function CustomerRecommend() {
  const testimonials = [
    {
      text: "אני פשוט מאוהבת בתוצאות! אחרי טיפול מזותרפיה אצל רבקה, העור שלי מרגיש חלק, מתוח וזוהר. רבקה מקצועית ברמות שלא הכרתי, דואגת להסביר כל שלב בטיפול ומעניקה תחושת ביטחון. אין ספק שאחזור שוב!",
      name: "הילה מ. - טיפול מזותרפיה",
    },
    {
      text: "טיפולי הלייזר בקליניקה של רבקה היו חוויה מצוינת. מעבר לאווירה הרגועה והנעימה, התוצאות מדהימות – עור חלק בלי כאבים מיותרים. רבקה מקצועית וסבלנית, ואני ממליצה בחום לכל מי שמחפשת פתרון אמיתי להסרת שיער!",
      name: "דנה ש. - הסרת שיער בלייזר",
    },
    {
      text: "הגעתי לטיפול פנים ממצק עם המון ספקות, אבל רבקה הצליחה להפתיע אותי לטובה! הטיפול עם מכשיר גלי הרדיו עשה פלאים לעור שלי. הפנים שלי מרגישות צעירות ורעננות, ורבקה ליוותה אותי לאורך כל הדרך בצורה נעימה ומרגיעה. מומלץ ביותר!",
      name: "אנה ג. - טיפול פנים ממצק",
    },
  ];

  return (
    <section className="px-4" dir="rtl">
      <div className="text-center">
        <h2 className="text-2xl text-[#3d3c3673] font-black tracking-wider">
          לקוחות ממליצות
        </h2>
      </div>

      <Carousel
        className="w-full max-w-7xl mx-auto "
        opts={{
          align: "start",
          loop: true,
          direction: "rtl",
        }}
      >
        <div className="mr-8 ml-9">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 text-right md:h-60 relative">
                  {/* Custom Border */}

                  <div className="absolute left-4 top-[15%] bottom-[5%] border-l border-dashed border-slate-200"></div>

                  <div className="text-[#f1da9bcb] text-left pl-4">
                    <span className="text-2xl ">"</span>
                  </div>

                  <blockquote className="text-[#816178ec] text-[15px]/relaxed bg-white/20 rounded-md p-1">
                    {testimonial.text}
                  </blockquote>

                  <div className="text-right mt-2">
                    <h4 className="text-[#928d91ee] text-xs">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
                <div className="text-[#f1da9bc7] text-right px-4">
                  <span className="text-2xl ">"</span>
                </div>

                <div className="flex justify-center md:mb-6 mb-3">
                  <FiHeart
                    size={28}
                    className="bg-[#ecb247b9] rounded-full p-1 text-[#fbf9fc] "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="lg:hidden text-[#ddd4dd] bg-[#fff9ff70] opacity-70" />
        <CarouselNext className="lg:hidden text-[#ddd4dd] bg-[#fff9ff70] opacity-70" />
      </Carousel>
    </section>
  );
}

export default CustomerRecommend;
