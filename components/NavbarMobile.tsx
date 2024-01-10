import { NAV_LINKS } from "@/constants";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { Fragment } from "react";

const NavbarMobile = () => {
  return (
    <Menu as="nav">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="medium-16 text-blue-100 flexCenter cursor-pointer transition-all">
              {open ? (
                <XMarkIcon className="inline-block cursor-pointer lg:hidden w-8 h-8" />
              ) : (
                <Bars3BottomLeftIcon className="inline-block cursor-pointer lg:hidden w-8 h-8" />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-280 transform origin-top"
            enterFrom="opacity-0 scale-y-0"
            enterTo="opacity-100 scale-y-100"
            leave="transition ease-in duration-300 transform origin-top"
            leaveFrom="opacity-100 scale-y-100"
            leaveTo="opacity-0 scale-y-0"
          >
            <Menu.Items className="absolute z-10 top-[81px] left-0 min-w-full bg-white shadow-lg lg:px-2 md:px-0 pt-4 pb-10">
              <div className="max-container">
                <Menu.Item>
                  <div className="flexCenter flex-col">
                    {NAV_LINKS.map((link) => {
                      return (
                        <Link
                          href={link.href}
                          key={link.key}
                          className="semibold-20 text-blue-100 flexCenter cursor-pointer mb-2"
                        >
                          {link.label}
                        </Link>
                      );
                    })}

                    <div className="flex flex-col w-full px-4 gap-3">
                      <button className="btn_outline w-full">
                        Book a demo
                      </button>
                      <button className="btn_blue w-full">Sign in</button>
                    </div>
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default NavbarMobile;
