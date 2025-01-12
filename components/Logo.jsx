import Image from "next/image";
import { WindSong } from "next/font/google";

const windSong = WindSong({
  subsets: ["latin"],
  weight: ["500"],
});

function Logo() {
  return (
    <div className="flex-between gap-2 ">
      <div className="relative rounded-2xl">
        {/* Background Image */}
        <Image
          src="/images/3.jpg"
          alt="rivka kalay image"
          height={90}
          width={90}
          priority={true}
          className="rounded-full opacity-90 "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ffefe8] via-[#fae1c4] to-transparent opacity-15 hover:opacity-0 rounded-full"></div>
      </div>

      {/* title (name) */}
      <div>
        <p
          style={{
            textShadow: "1px 1px 2px rgb(99, 97, 97)",
          }}
          className={`text-[42px] md:text-[48px] text-[#20201f] ${windSong.className} -translate-x-7 translate-y-6`}
        >
          Rivka Kalay
        </p>
      </div>
    </div>
  );
}

export default Logo;
