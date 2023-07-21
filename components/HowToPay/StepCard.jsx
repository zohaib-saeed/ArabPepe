import React from "react";

const StepCard = ({ step, text }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-center justify-end">
        <p
          className={`h-[46px] w-[120px] flex bg-white-main text-black-main  items-center justify-center font-[400] text-[16px] rounded-[8px] cursor-pointer`}
        >
          Step{step}
        </p>
      </div>
      <p className="font-[400] text-white-main sm:text-[24px] text-[16px]">
        {text}
      </p>
    </div>
  );
};

export default StepCard;
