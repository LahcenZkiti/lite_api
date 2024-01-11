"use client";

import { CubeTransparentIcon, LinkIcon, UsersIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NavLinkCard = ({ link }) => {
  return (
    <Link href={link.to} className="group rounded-lg hover:shadow-lg transition-all ease-in-out duration-500 p-2">
      <div className={`w-full h-3/4 flexCenter rounded-lg ${link.bgColor}`}>
        {
          link.key === 'travel_api' ? (
            <UsersIcon className="h-12 w-12 group-hover:text-indigo-10 group-hover:scale-125 transition-all ease-in-out duration-500" />
          ) : link.key === 'travel_links' ? (
            <LinkIcon className="h-12 w-12 group-hover:text-blue-700 group-hover:scale-125 transition-all ease-in-out duration-500" />
          ) : (
            <CubeTransparentIcon className="h-12 w-12 group-hover:text-orange-50 group-hover:scale-125 transition-all ease-in-out duration-500" />
          ) 
        }
      </div>
      <h3 className="bold-16 mt-4">{link.title}</h3>
      <p className="text-xs">{link.description}</p>
    </Link>
  );
};

export default NavLinkCard;
