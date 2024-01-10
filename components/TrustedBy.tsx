import { PARTNERS } from "@/constants";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-gray-20">
      <div className="max-container padding-container py-[32px] md:py-[56px]">
        <p className="text-blue-300 regular-18 text-center pb-[32px] md:pb-[56px]">
          Trusted by the world's leading organizations
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {PARTNERS.map((item) => (
              <Image
                key={item.alt}
                src={item.url}
                alt={item.alt}
                width={item.width}
                height={23}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default TrustedBy;
