import React from "react";

const Step3Card = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-center justify-end">
        <p
          className={`h-[46px] w-[120px] flex bg-white-main text-black-main  items-center justify-center font-[400] text-[16px] rounded-[8px] cursor-pointer`}
        >
          Step3
        </p>
      </div>

      <p className="font-[400] text-white-main sm:text-[24px] text-[16px]">
        Go to the PancakeSwap decentralized exchange platform. You can access it
        by clicking on the following link:{" "}
        <a
          href="https://pancakeswap.finance/"
          className="font-[400] text-[16px] sm:text-[24px] text-brand-main"
        >
          https://pancakeswap.finance/
        </a>
      </p>
    </div>
  );
};

export default Step3Card;
