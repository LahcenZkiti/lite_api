import React from 'react'

const BecomeASupplier = () => {
  return (
    <section className="items-center bg-neutral-100 flex flex-col justify-center px-16 py-3.5 max-md:px-5"  data-aos="fade-up">
      <div className="w-full max-container padding-container max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <h3 className="text-blue-100 text-3xl font-semibold tracking-tight self-stretch max-md:max-w-full">
                How to become a supplier
              </h3>
              <p className="text-base leading-6 tracking-normal mt-1.5 max-w-[490px] max-md:max-w-full">
                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
                Morbi in orci risus. Donec pretium f
              </p>
              <button type='button' className="btn_orange_small mt-6">
                Contact us
              </button>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/become_supplier.svg"
              alt='become_supplier'
              className="aspect-[1.17] object-contain w-[435px] object-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BecomeASupplier