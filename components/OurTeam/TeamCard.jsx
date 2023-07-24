import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";

const TeamCard = ({ name, role, picture }) => {
  return (
    <div className=" md:w-[350px] w-full flex flex-col items-center justify-center gap-10 bg-[#ffffff]/20 backdrop-blur-[5px] rounded-[12px] border-[2px] border-brand-secondary p-4">
      <div className="relative h-[150px] w-[150px] rounded-full">
        <Image className="rounded-full" src={picture} alt="" fill />
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-3">
        <p className=" bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent font-bold text-[28px]">
          {name}
        </p>
        <p className="font-[500] text-white-main text-[20px]">{role}</p>
      </div>

      <div className="w-full flex items-center justify-end">
        <div className="h-[34px] w-[34px] flex items-center justify-center bg-brand-secondary cursor-pointer rounded-[6px]">
          <BiLogoLinkedin className="h-[24px] w-[24px] text-white-main" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
