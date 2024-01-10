import React from "react";

const Numbers = () => {
  return (
    <section className="max-container padding-container flexCenter flex-col px-20 py-12 max-md:px-5"  data-aos="zoom-in">
      <h2 className="text-orange-50 semibold-20 mt-10 max-md:mt-10">
        Numbers
      </h2>
      <div className="max-w-full mt-8 mb-10 max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <span className="flexCenter grow flex-col px-10 max-md:mt-10 max-md:px-5">
              <h3 className="text-blue-100 semibold-60 max-md:text-4xl">
                40k+
              </h3>
              <p className="medium-16 mt-2">
                Bookings / Day
              </p>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flexCenter grow flex-col px-5 max-md:mt-10 max-md:pl-5">
              <h3 className="text-blue-100 semibold-60 max-md:text-4xl">
                14.7B+
              </h3>
              <p className="medium-16 whitespace-nowrap mt-2">
                Searches / Day
              </p>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flexCenter grow flex-col px-9 max-md:mt-10 max-md:px-5">
              <h3 className="text-blue-100 semibold-60 max-md:text-4xl">
                4.1B+
              </h3>
              <p className="medium-16 mt-2">
                Yearly Turnove
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
