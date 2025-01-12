import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "רבקה קליי - קוסמטיקאית פרא רפואית | טיפולי יופי מתקדמים,
  description: "רבקה קליי - קוסמטיקאית פרא רפואית מומחית לטיפולים מתקדמים וחדשניים בתחום היופי והאסתטיקה. הסרת שיער בלייזר בטכנולוגיה מתקדמת וללא כאבים, הסרת קעקועים מקצועית ללא סימנים, איפור קבוע ברמה הגבוהה ביותר, הלחמת ריסים והרמת ריסים למראה טבעי ומרשים. טיפולי פיגמנטציה ייחודיים להחלקת גוון העור, פילינג לחידוש העור, וטיפולי אקנה מותאמים אישית. בואי לחוות חוויה מפנקת ותוצאות מדהימות עם רבקה קליי."
,
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   bg-[#f7f7f4f1]`}
      >
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
