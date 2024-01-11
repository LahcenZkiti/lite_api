import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section
      className="max-container padding-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-[32px] md:py-[56px]"
      data-aos="fade-right"
    >
      {FEATURES.map((feature) => (
        <div
          key={feature.title}
          data-aos="fade-right"
          data-aos-duration={feature.duration}
        >
          <img className="mb-5" src={feature.icon} alt={feature.title} />
          <h3 className="semibold-20 mb-[10px]">{feature.title}</h3>
          <p className="regular-14 max-w-[285px]">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
