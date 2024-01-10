import React from "react";

const NavLinkCard = ({ link }) => {
  return (
    <div className="rounded-lg hover:shadow-md hover:border border-gray-20 p-2">
      <div className={`w-full h-3/4 ${link.bgColor}`}>
        sss
      </div>
      {link.title}
    </div>
  );
};

export default NavLinkCard;
