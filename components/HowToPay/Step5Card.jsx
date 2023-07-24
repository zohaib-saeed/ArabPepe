import React from "react";

const Step5Card = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-center justify-end">
        <p
          className={`h-[46px] w-[120px] flex bg-white-main text-black-main  items-center justify-center font-[400] text-[16px] rounded-[8px] cursor-pointer`}
        >
          Step5
        </p>
      </div>

      <p className="font-[400] text-white-main sm:text-[24px] text-[16px]">
        Once your wallet is connected, select the token swap feature on
        PancakeSwap. In the "From" field, choose BNB as the currency to swap. In
        the "To" field, paste the $APEPE contract address:{" "}
        <a
          href="https://bscscan.com/address/0x463464927671a2e8d406A1a3E64093D42a181C44"
          className="font-[400] text-[14px] sm:text-[24px] text-brand-main"
        >
         0x463464927671a2e8d406A1a3E64093D42a181C44.
        </a><br/>
        Set the desired amount of $APEPE tokens you want to buy and click the "Swap" button.
      </p>
    </div>
  );
};

export default Step5Card;
