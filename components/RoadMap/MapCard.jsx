import React from "react";
import Text from "../shared/Typography/Text";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";

const MapCard = ({ options, title }) => {
  return (
    <div className="md:h-[320px] sm:h-[360px]  h-[460px] w-full border-2 rounded-tr-[40px] rounded-bl-[40px] border-white-main sm:p-3 p-[10px] m-auto">
      <div className="h-full w-full flex flex-col items-start justify-start gap-2 border-2 border-white-main rounded-tr-[40px] rounded-bl-[40px] p-2 sm:p-3">
        <p className="font-[500] text-white-main text-[18px]">{title}</p>
        <div className="w-full flex flex-col gap-2 items-start justify-start">
          {options.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-start justify-start gap-2"
              >
                <div className="shrink-0">
                  <TbSquareRoundedChevronRightFilled className="text-white-main h-[20px] w-[20px] mt-1" />
                </div>

                <Text text={item} additionalStyles="!text-left" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapCard;
