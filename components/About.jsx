import React from "react";

function About() {
  return (
    <section
      className="relative bg-[url('/images/about/6.jpg')] bg-cover bg-center bg-no-repeat"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-white/35 bg-gradient-to-l from-[#f7f3f7] via-[#fcfcfc] to-transparent opacity-50"></div>

      <div className="relative px-4 py-20 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className=" ltr:text-left rtl:text-right">
          <h1 className="sm:text-[76px] text-[68px] font-extrabold text-[#ddd4dd] mr-4 tracking-wider">
            רבקה קליי
          </h1>
          <h1 className="font-extrabold text-5xl text-[#5a515a] -translate-x-8 -translate-y-12 tracking-wider opacity-80">
            רבקה קליי
          </h1>

          <div className="py-2 px-3 bg-white/30 rounded-2xl max-w-sm sm:max-w-xl">
            <p className="sm:text-md/relaxed md:text-lg/relaxed text-[#504950]">
              קוסמטיקאית פרא-רפואית בכירה עם למעלה מ-15 שנות ניסיון.
            </p>
            <p className="mt-1  sm:text-md/relaxed md:text-lg/relaxed text-[#504950]">
              הקליניקה של רבקה הממוקמת בנשר מתמחה בטיפולי אנטי-אייג'ינג מתקדמים
              המותאמים אישית, טיפולי הסרת כתמים וקמטוטים, טיפולי מזותרפיה,
              טיפולי לאקנה, מגוון סוגי פילינג, טיפולים למיצוק וחידוש עור, הלחמת
              והרמת ריסים, איפור קבוע, והסרת שיער בלייזר.
            </p>
            <p className="mt-1  sm:text-md/relaxed md:text-lg/relaxed text-[#504950]">
              רבקה משלבת חדשנות טכנולוגית עם שיטות טיפול ייחודיות שפותחו על בסיס
              ניסיון רב שנים, במטרה להעניק לך עור זוהר ובריא, תוך מתן מענה מדויק
              לכל סוגי העור.
            </p>
            <p className="mt-1  sm:text-md/relaxed md:text-lg/relaxed text-[#504950]">
              בקליניקה תיהני מתהליך אישי ומקצועי המבטיח התאמה מלאה לצרכים שלך
              והשגת תוצאות אידיאליות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
