import React from "react";
import Wrapper from "./Wrapper";
import Heading from "./Typography/Heading";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Wrapper id="contact" style="py-16 lg:min-h-[100vh] relative">
      <footer className="w-full flex flex-col items-center justify-start gap-10">
        <Heading text="Follow Us" />
        <div className="w-full flex items-center justify-center gap-8">
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white-main cursor-pointer">
            <BsTwitter className="h-[36px] w-[36px]" />
          </div>
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white-main cursor-pointer">
            <FaTelegramPlane className="h-[36px] w-[36px]" />
          </div>
        </div>
        <Heading text="Disclaimer" />
        <p className="font-[400] text-white-main text-[18px] text-center">{`$ARABPEPE coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize. $ARABPEPE is a meme coin with no intrinsic value or expectation of financial return. But you could be surprised by our creativity! :> There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. ** The content on this website is for informational purposes only and does not constitute financial, investment, or other professional advice. Investing in cryptocurrencies carries inherent risks, and you should perform your own research before making any decisions. TurboToadToken and its team members are not responsible for any losses or damages that may occur as a result of using the information provided on this website.`}</p>
        <p className="font-[400] text-white-main text-[16px] text-center absolute bottom-4">
          © {year} ArabPepe.com All rights reserved.
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
