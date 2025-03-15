import Image from "next/image";
import React from "react";

function TreatmentCard({ name, desc, img }) {
  return (
    <div
      className="block rounded-lg py-4 px-3 shadow-sm shadow-[#c0bcbcb9] bg-[#ffffff63] "
      dir="rtl"
    >
      <Image
        src={img}
        height={1000}
        width={1500}
        alt={name}
        className=" rounded-lg"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="p-2">
        <dl>
          <div>
            <dd className="font-medium font-gveret tracking-wide text-[#6e6a70]">
              {name}
            </dd>
          </div>
        </dl>

        <div className="mt-2 flex items-center text-sm text-[#403e41]">
          <div>{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentCard;
