import React from "react";
import Wrapper from "./shared/Wrapper";
import Heading from "./shared/Typography/Heading";
import Data from "../constants/Json/Dummy.json";
import Link from "next/link";
import Image from "next/image";
const DownloadProfilePicture = () => {
  return (
    <Wrapper id="downloadProfilePicture" style="py-16">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Heading text="Download your new profile pictures :)" style={"text-center"} />
        <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
          {Data.downloadProfilePics.pics.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.route}
                className="h-[200px] w-[200px] relative"
              >
                <Image src={item.pic} alt="" fill />
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default DownloadProfilePicture;
