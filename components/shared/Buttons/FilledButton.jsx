import React from "react";
import Link from "next/link";

const FilledButton = ({
  link = "/",
  text,
  style = "h-[46px] w-[160px] ",
  event,
}) => {
  return (
    <Link
      onClick={event}
      href={`${link}`}
      className={`${style} flex items-center justify-center text-white-main border-[#c7127f] bg_gradient font-[500] text-[16px] hover:duration-500 rounded-[8px]`}
    >
      {text}
    </Link>
  );
};

export default FilledButton;
