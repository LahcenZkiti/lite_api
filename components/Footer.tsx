import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-end items-center bg-blue-100 flex-col pt-12 pb-2.5 px-16 max-md:px-5">
      <div className="flex w-full max-container padding-container flex-col items-stretch mt-8 max-md:max-w-full">
        <div className="justify-between flex w-full gap-5 items-start max-md:max-w-full max-md:flex-wrap">
          <span className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <Link href="/" className="border-b border-blue-200 md:border-none pb-2 md:pb-0">
              <Image
                src="/logo_white.svg"
                alt="liteAPI"
                width={78}
                height={25}
                className="aspect-[3.9] object-contain object-center overflow-hidden shrink-0 max-w-full my-auto"
              />
            </Link>
            <div className="bg-blue-200 self-stretch hidden md:flex w-px shrink-0 h-6 flex-col " />
            <div className="text-white text-lg grow whitespace-nowrap self-start font-lota">
              The fastest way to build travel apps
            </div>
          </span>
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              {FOOTER_LINKS.map((link) => (
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <span className="items-stretch flex grow flex-col pr-7 max-md:mt-10 max-md:pr-5">
                    <div className="text-white text-sm font-semibold whitespace-nowrap mb-1">
                      {link.title}
                    </div>
                    {link.links.map((_link) => (
                      <Link
                        href="/"
                        className="text-gray-40 medium-14 whitespace-nowrap mt-3"
                      >
                        {_link}
                      </Link>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-800 flex shrink-0 h-px flex-col mt-16 max-md:max-w-full max-md:mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
