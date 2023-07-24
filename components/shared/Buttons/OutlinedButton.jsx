import React from "react";
import Link from "next/link";

const OutlinedButton = ({ link = "/", text, style = "h-[46px] w-[160px]" }) => {
  return (
    <Link
      href={`${link}`}
      className={`${style} flex items-center justify-center border-[1px] border-[#c7127f] text-white-main hover:bg-gray-100/10  hover:duration-200 bg-transparent font-[500] text-[16px] rounded-[8px]`}
    >
      {text}
    </Link>
  );
};

export default OutlinedButton;
