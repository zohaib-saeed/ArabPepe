import React from "react";
import Heading from "../shared/Typography/Heading";
import Text from "../shared/Typography/Text";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import FilledButton from "../shared/Buttons/FilledButton";
import Data from "../../constants/Json/Dummy.json";

const Tokenomics = () => {
  const { tokenList } = Data.Tokenomics;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center lg:items-start justify-start gap-6">
        <Heading text="Tokenomics" />
        {tokenList.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center justify-start gap-4"
            >
              <TbSquareRoundedChevronRightFilled className="text-white-main h-[24px] w-[24px]" />
              <Text
                text={`${item.title}:`}
                style="text-brand-main font-[500] text-[16px]"
              />
              {item.link ? (
                <div className="flex items-center justify-start gap-2">
                  <a
                    className="text-white-main font-[400] sm:text-[18px] text-[16px]"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                  <BsArrowUpRight className="text-white-main h-[16px] w-[16px]" />
                </div>
              ) : (
                <Text
                  text={item.text}
                  style="text-white-main font-[400] text-[16px]"
                />
              )}
            </div>
          );
        })}

        <Text
          text="The official contract address
        for $APEPE token is"
          style="text-white-main font-[400] text-[16px]"
        />
        <a
          href="https://bscscan.com/token/0x463464927671a2e8d406A1a3E64093D42a181C44"
          className="font-[400] sm:text-[16px] text-[14px] text-brand-main text-center"
        >
          0x463464927671a2e8d406A1a3E64093D42a181C44
        </a>
        <FilledButton text="How to Pay" link="#howToPay" />
      </div>
    </div>
  );
};

export default Tokenomics;
