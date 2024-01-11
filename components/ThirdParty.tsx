import React from "react";

const ThirdParty = () => {
  return (
    <section className="border-t-gray-20 border-b-gray-20 mt-12 md:mt-[71px] flex flex-col justify-center  border-t border-solid border-b">
      <div className="max-container padding-container flexCenter w-full flex-col max-md:max-w-full my-12 md:my-[71px]">
        <h2 className="semibold-40" data-aos="fade-up" data-aos-duration="500">
          Third-party solutions
        </h2>
        <p
          className="medium-14 mb-14 mx-auto max-w-[635px] max-md:max-w-full text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          At liteAPI we also integrate within our systems the best 1 party
          business solutions for your company. Discover our state of the art and
          fully integrated third party solutions:
        </p>

        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-[8px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div
              className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
              data-aos="fade-right"
            >
              <div className="bg-indigo-500 flex grow flex-col items-center w-full pl-8 pr-14 pt-8 rounded-2xl max-md:max-w-full max-md:mt-2 max-md:px-5">
                <h3 className="text-blue-100 semibold-24 tracking-tight self-stretch max-md:max-w-full">
                  Hotel Confirmation Number
                </h3>
                <p className="self-stretch mt-2 max-md:max-w-full">
                  He only way to be 100% sure that the hotel reservation has
                  been confirmed and to avoid problems and extra costs with
                  partners and/or clientes is the Hotel Confirmation Number.
                  Easy, fast and convenient for your business.
                </p>
                <img
                  loading="lazy"
                  src="/hotel_confirmation.svg"
                  alt="hotel_confirmation"
                  className="aspect-[1.26] object-contain object-center w-[378px] overflow-hidden max-w-full mt-7"
                />
              </div>
            </div>
            <div
              className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
              data-aos="fade-left"
            >
              <div className="bg-orange-60 flex grow flex-col items-center w-full pl-8 pr-14 pt-8 rounded-2xl max-md:max-w-full max-md:mt-2 max-md:px-5">
                <h3 className="text-blue-100 semibold-24 tracking-tight self-stretch max-md:max-w-full">
                  Hotel mapping
                </h3>
                <p className="self-stretch w-[511px] max-w-full mt-2">
                  Through collaboration with multiple partners such as GIATA,
                  TravelgateX integrates 3rd party mapping providers to the
                  marketplace.
                </p>
                <img
                  loading="lazy"
                  src="/hotel_mapping.svg"
                  alt="hotel_mapping"
                  className="aspect-[2.26] object-contain object-center w-full overflow-hidden mt-20 max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-orange-20 self-stretch flex flex-col mt-2 pl-8 pr-20 pt-8 rounded-2xl items-end max-md:max-w-full max-md:px-5"
          data-aos="fade-up"
        >
          <h3 className="text-blue-100 semibold-24 tracking-tight self-start max-md:max-w-full">
            Hotel transfers
          </h3>
          <p className="w-[511px] max-w-full mt-2 self-start">
            Create a frictionless door to door experience by easily adding the
            transfer option to the hotel booking, avoiding yet another API
            Integration.
          </p>
          <img
            loading="lazy"
            src="/hotel_transfers.svg"
            alt="hotel_transfers"
            className="aspect-[1.9] object-contain object-center w-[663px] overflow-hidden max-w-full max-md:mr-2.5"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdParty;
