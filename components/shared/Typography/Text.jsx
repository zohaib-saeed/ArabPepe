import React from "react";

const Text = ({ text, style = "text-white-main font-[400] text-[16px]" }) => {
  return <p className={`${style} sm:text-[18px] `}>{text}</p>;
};

export default Text;
