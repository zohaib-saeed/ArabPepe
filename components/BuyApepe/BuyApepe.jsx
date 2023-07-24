import React, { useState } from "react";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";
import { FaCopy, FaWallet, FaMoneyBill } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";

const BuyApepe = () => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleClose = () => {
    setOpenTooltip(false);
  };

  const handleOpen = () => {
    setOpenTooltip(true);
  };

  function copyToClipboard() {
    navigator.clipboard.writeText("abc@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);

    handleClick();
  }

  const SnackbarContent = () => {
    return (
      <div className="text-white font-medium text-[14px] vsm:text-[15px] px-[16px] rounded py-[5px] vsm:py-[6px] text-center">
        {`"${email}" copied to your clipboard`}
      </div>
    );
  };
  const options = [
    {
      text: "Liquidity locked for 700 days ",
      link: "/",
      linkText: "Lock",
    },
    {
      text: "Contract renounced  ",
      link: "/",
      linkText: "Txn",
    },
    {
      text: "Audited by Techright  ",
      link: "/",
      linkText: "Audit",
    },
  ];

  return (
    <div className="w-full">
      <Wrapper id="buy-apepe" style="py-16">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="Buy $APEPE" />
          <div className="w-full grid lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6">
              <p className="text-white-main font-bold text-[28px]">
                Buy $APEPE
              </p>
              <p className="text-white-main/70 text-[20px] leading-[28px] font-semibold">
                {" "}
                You can buy $APEPE on our website by exchanging it with any
                cryptocurrency or fiat currency (service provided by Flooz).
              </p>
              {options.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-start gap-3"
                  >
                    <TbSquareRoundedChevronRightFilled className="text-white-main h-[20px] w-[20px]" />
                    <p className="text-brand-main text-[18px] font-[500]">
                      {item.text}
                    </p>
                    <Link
                      href={item.link}
                      className="flex items-center justify-start gap-1 text-white-main/70 text-[18px] font-semibold"
                    >
                      {item.linkText} <BiLinkExternal />
                    </Link>
                  </div>
                );
              })}
              <hr className="w-full border-dashed" />
              <p className="text-white-main/70 text-[20px] leading-[28px] font-semibold">
                Contract Details
              </p>
              <div className="h-[46px] w-full lg:w-auto flex items-center lg:justify-start justify-between gap-4 px-4 rounded-[8px] bg-white-main/50">
                <p className="text-white-main/80 text-[18px] font-medium">
                  0x98a2500a2c3b8877b0ed5ac3acc300c50bf7064b
                </p>
                <Tooltip title="Copy" content="Copy" arrow placement="top">
                  <FaCopy className="text-white-main/80 h-[20px] w-[20px] cursor-pointer" />
                </Tooltip>
              </div>
              <div className="w-full flex sm:flex-row flex-col gap-6 items-center justify-start">
                <button className="h-[46px] sm:w-[200px] w-full flex items-center justify-center gap-2 bg-white-main/50 rounded-[8px] text-white-main/80 text-[18px] font-medium">
                  {" "}
                  <FaWallet className="h-[20px] w-[20px]" />
                  Add to MetaMask
                </button>
                <button className="h-[46px] sm:w-[200px] w-full flex items-center justify-center gap-2 bg-white-main/50 rounded-[8px] text-white-main/80 text-[18px] font-medium">
                  {" "}
                  <FaMoneyBill className="h-[20px] w-[20px]" />
                  Buy on Pcs
                </button>
              </div>
              {/* <Snackbar
                className="bg-black text-white text-[13px]  rounded-[3px]"
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message={<SnackbarContent />}
                autoHideDuration={2000}
              /> */}
            </div>
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
        </div>
      </Wrapper>
    </div>
  );
};

export default BuyApepe;
