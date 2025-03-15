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
      text: "טיפולי הלייזר בקליניקה של רבקה היו חוויה מצוינת. מעבר לאווירה הרגועה והנעימה, התוצאות מדהימות – עור חלק בלי כאבים מיותרים. רבקה מקצועית וסבלנית, ואני ממליצה בחום לכל מי שמחפשת פתרון אמיתי ויעיל להסרת שיער!",
      name: "דנה ש. - הסרת שיער בלייזר",
    },
    {
      text: "הגעתי לטיפול פנים ממצק עם המון ספקות, אבל רבקה הצליחה להפתיע אותי לטובה! הטיפול עם מכשיר גלי הרדיו עשה פלאים לעור שלי. הפנים שלי מרגישות צעירות ורעננות, ורבקה ליוותה אותי לאורך כל הדרך בצורה נעימה ומרגיעה. מומלץ ביותר!",
      name: "אנה ג. - טיפול פנים ממצק",
    },
    {
      text: "רבקה פשוט מדהימה! עברתי סדרת טיפולי פילינג והעור שלי נראה מתוח, רענן ובריא מתמיד. אני ממליצה בחום לכל מי שרוצה להרגיש טוב עם עצמו!",
      name: "רונית ב. - פילינג קרבוני",
    },
    {
      text: "אחרי שנים של בעיות פיגמנטציה, סוף סוף מצאתי פתרון אצל רבקה. הטיפול להסרת כתמים עשה שינוי אדיר, ואני מרוצה מאוד מהתוצאה!",
      name: "ראוון ר. - הסרת כתמים וקמטוטים",
    },
    {
      text: "אין על השירות של רבקה! מעבר למקצועיות, היא גם מקסימה וקשובה. טיפולי המזותרפיה וההבהרה שלה שינו לי את עור הפנים לחלוטין!",
      name: "גלית ש. - טיפול הבהרה ומזותרפיה",
    },
    {
      text: "עשיתי טיפול הרמת ריסים אצל רבקה והתוצאה פשוט מושלמת! הריסים נראים טבעיים, ארוכים ומודגשים. אני ממליצה בחום!",
      name: "מיה ט. - הרמת ריסים",
    },
  ];

  return (
    <section className="px-4" dir="rtl">
      <div className="text-center">
        <h2 className="text-3xl text-[#3d3c3673] tracking-wider font-gveret">
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
                  <div className="absolute left-4 top-[15%] bottom-[5%] border-l border-dashed border-slate-200"></div>

                  <div className="text-[#f1da9bcb] text-left pl-4">
                    <span className="text-2xl ">"</span>
                  </div>
                  <div className="flex flex-col h-full justify-between gap-5 sm:gap-0 p-2">
                    <blockquote className="text-[#816178ec] font-dana tracking-wide font-semibold text-[16px]/relaxed bg-white/20 rounded-md p-1">
                      {testimonial.text}
                    </blockquote>

                    <div className="text-right">
                      <h4 className="text-[#928d91ee] text-xs font-gveret tracking-wide">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="text-[#f1da9bc7] text-right px-4">
                  <span className="text-2xl ">"</span>
                </div>

                <div className="flex justify-center md:mb-6 mb-3">
                  <FiHeart
                    size={28}
                    className="bg-[#ecb247b9] rounded-full p-1 text-[#fbf9fc] animate-heartbeat"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className=" text-[#ddd4dd] bg-[#fff9ff70] opacity-70" />
        <CarouselNext className=" text-[#ddd4dd] bg-[#fff9ff70] opacity-70" />
      </Carousel>
    </section>
  );
}

export default CustomerRecommend;
