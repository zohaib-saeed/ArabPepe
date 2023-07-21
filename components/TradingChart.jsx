import React from "react";
import Wrapper from "./shared/Wrapper";
import Heading from "./shared/Typography/Heading";

const TradingChart = () => {
  return (
    <Wrapper id={"tradeChart"} style="py-16 lg:min-h-[100vh]">
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <Heading text="Arab Pepe to USD Chart" style={"text-center"} />
        <div className="w-full h-[500px]">
          <iframe
            height="100%"
            width="100%"
            id="geckoterminal-embed"
            title="GeckoTerminal Embed"
            src="https://www.geckoterminal.com/bsc/pools/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f?embed=1&info=1&swaps=1"
            allow="clipboard-write"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

export default TradingChart;
