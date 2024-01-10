import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container">
      <h2 className="semibold-16 text-orange-50 flexStart mt-8 mb-12">
        Travel switch
      </h2>
      <div className="text-center flexCenter flex-col mb-8 md:mb-20" data-aos="zoom-in-down">
        <h1 className="text-blue-100 bold-32 lg:bold-40">
          Boost your sales any risk!
        </h1>
        <p className="text-[16px] mt-[18px] mb-[32px] max-w-[500px]">
          Sell online without a website. Share Payment Links with customers via
          SMS, email or WhatsApp and get paid instantly via 40+ payment modes.
        </p>
        <div className="flexCenter gap-[10px]">
          <button className="btn_orange_small">Contact us</button>
          <button className="btn_outline">Book a demo</button>
        </div>
      </div>

      <div className="bg-orange-10 rounded-[16px_16px_0px_0px] mt-24 md:rounded-[32px_32px_0px_0px] max-md:max-w-full max-md:mt-10 pt-4 px-4" data-aos="fade-up">
        <div className="max-w-[1440px] w-full relative aspect-[2.4]">
          <Image
            src="/hero_bg.png"
            alt="hero"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
            priority
            className="aspect-[2.4] object-contain object-center w-full overflow-hidden max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
