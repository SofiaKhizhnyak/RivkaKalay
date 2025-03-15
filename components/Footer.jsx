"use client";
import Link from "next/link";
import { WindSong } from "next/font/google";
import { IoLogoWhatsapp, IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const windSong = WindSong({
  subsets: ["latin"],
  weight: ["500"],
});

function Footer() {
  return (
    <footer className="bg-[#e2dde2b4] border-t px-6 pt-4 pb-2" dir="rtl">
      <div className="grid grid-cols-3 gap-6 md:px-2">
        <div className="col-span-2">
          <p
            style={{
              textShadow: "1px 1px 2px rgb(99, 97, 97)",
            }}
            className={`text-[30px] text-[#20201f] ${windSong.className} mr-2`}
          >
            Rivka Kalay
          </p>
          <div className="text-[13px] text-gray-500/90 mt-2 leading-relaxed space-y-1 font-gveret tracking-wider">
            <p>רבקה, קוסמטיקאית בכירה עם מעל 15 שנות ניסיון.</p>
            <p>
              מתמחה בטיפולי אנטי-אייג'ינג, טיפולי פגמנטציה ופילינג, מזותרפיה,
              הלחמת ריסים, איפור קבוע ועוד.
            </p>
            <p className="text-gray-500 ">
              שילוב של טכנולוגיות חדשניות עם שיטות טיפול ייחודיות לתוצאות
              מושלמות.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-center items-center mt-4">
          <div className="text-sm text-slate-600 space-y-4 font-dana tracking-wider font-semibold">
            <Link
              href="https://www.facebook.com/profile.php?id=100021660900905"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={28}
                className="bg-[#d9bf77]  rounded-full  text-[#fbf9fc] p-1 hover:scale-110 hover:bg-[#e0bb6b]"
              />
              <span>רבקה קליי</span>
            </Link>

            <div className="text-[10px] xs:text-sm text-slate-600 space-y-4">
              <Link
                href="https://web.whatsapp.com/send?phone=972547310998"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp
                  size={28}
                  className="bg-[#d9bf77] rounded-full  text-[#fbf9fc] p-1 hover:scale-110 hover:bg-[#e0bb6b]"
                />
                <span>054-7310998</span>
              </Link>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=הזית+1+נשר+ישראל"
                className="flex items-center gap-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLocationOutline
                  size={28}
                  className="bg-[#d9bf77] rounded-full  text-[#fbf9fc] p-1 hover:scale-110 hover:bg-[#e0bb6b]"
                />
                <span>הזית 1, נשר</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credit */}
      <div className="flex items-start justify-center text-[#a491b4] mt-7 pt-2 gap-1 ">
        <p className="text-[14px] ">
          <span className="font-dana font-extrabold tracking-wider">
            אתר זה נבנה ע"י
          </span>{" "}
          Sofia Khizhnyak
        </p>
        <Link href="https://www.linkedin.com/in/sofiakhizhnyak/">
          <FaLinkedin
            size={18}
            className="hover:text-[#8f73a7] hover:scale-110"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
