import React from "react";
import Text from "../shared/Typography/Text";
import FilledButton from "../shared/Buttons/FilledButton";
 


const TaxCard = ({ title, amount }) => {
  return (
    <div className=" lg:w-[400px] md:w-[350px] w-full flex flex-col items-center justify-center gap-10 bg-[#ffffff]/20 backdrop-blur-[5px] rounded-[12px] border-[2px] border-brand-secondary p-4">
      <p className="text-white-main font-bold text-[28px]">{title}</p>
      <Text
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              nam, temporibus quam perspiciatis reprehenderit voluptate.
              Facilis, fuga."
        style="text-center text-white-main"
      />
      <div className="w-full flex items-center justify-between">
        <p className=" text-[24px] font-semibold bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent">
          {amount}
        </p>
        <FilledButton text={title.startsWith("Buy") ? "Buy" : "Sell"} />
      </div>
    </div>
  );
};

export default TaxCard;
