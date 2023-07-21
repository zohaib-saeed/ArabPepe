import React from "react";

const Heading = ({ text, style }) => {
  return (
    <h1
      className={`${style} md:text-[50px] sm:text-[46px] text-[40px] uppercase font-[600] lg:whitespace-nowrap bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default Heading;
