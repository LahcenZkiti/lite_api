"use client";

import Link from "next/link";
import React from "react";

const NavLinkCard = ({ link }) => {
  return (
    <Link href={link.to} className="rounded-lg hover:shadow-md transition-all ease-in-out hover:border border-gray-20 p-2">
      <div className={`w-full h-3/4 rounded-lg ${link.bgColor}`}></div>
      <h3 className="bold-16 mt-4">{link.title}</h3>
      <p className="text-xs">{link.description}</p>
    </Link>
  );
};

export default NavLinkCard;
