import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";

const BuyApepe = () => {
  return (
    <div className="w-full">
      <Wrapper id="buy-apepe" style="py-16">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="Buy $APEPE" />
          <div className="w-full flex items-start justify-center">
            <iframe
              width="400"
              height="720"
              frameborder="0"
              allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
              src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x463464927671a2e8d406A1a3E64093D42a181C44&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=99&onRampTokenAddress=0x463464927671a2e8d406A1a3E64093D42a181C44&onRampLockToken=true&stakeDisabled=true&network=bsc&lightMode=false&primaryColor=%23785ee4&backgroundColor=transparent&roundedCorners=7&padding=20&refId=TKEA3r"
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BuyApepe;
