"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <header className="">
      <nav className="padding-container relative z-30 py-5 border-b border-b-gray-20">
        <div className="flexBetween max-container">
          <div className="flexStart gap-10">
            <Link href="/">
              <Image src="/logo.svg" alt="liteAPI" width={78} height={25} />
            </Link>
            <ul className="hidden h-full gap-8 lg:flex">
              {NAV_LINKS.map((link) => {
                return link.children?.length ? (
                  <DropDownMenu key={link.key} link={link} />
                ) : (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="medium-16 text-blue-100 flexCenter cursor-pointer transition-all"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="hidden lg:flex gap-3">
            <button className="btn_outline">Book a demo</button>
            <button className="btn_blue">Sign in</button>
          </div>
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
