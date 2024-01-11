import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { Fragment } from "react";
import NavLinkCard from "./NavLinkCard";

const DropDownMenu = ({ link }) => {
  return (
    <Menu as="li" className="inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="medium-16 text-blue-100 flexCenter cursor-pointer transition-all">
              {link.label}
              <ChevronDownIcon className={`h-4 w-4 transition-all ease-in-out duration-500 transform ${open ? '-rotate-180' : ''}`} />
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
                  <div className="grid grid-cols-4 gap-4">
                    {link.children.map((sub) => (
                        <NavLinkCard key={sub.key} link={sub} />
                    ))}
                    <div className="border border-indigo-300 rounded-lg bg-indigo-50 col-start-4 col-end-6 h-80"></div>
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

export default DropDownMenu;
