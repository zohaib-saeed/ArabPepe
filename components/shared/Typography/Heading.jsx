import React from "react";

const Heading = ({ text, style }) => {
  return (
    <h1
      className={`${style}  md:text-[50px] md:leading-[58px] sm:text-[46px] sm:leading-[58px] text-[40px] leadning-[48px] mb-4 md:mb-6 lg:mb-8 uppercase font-[700] lg:whitespace-nowrap bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default Heading;
