import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";

import TaxCard from "./TaxCard";

const Tax = () => {
  return (
    <Wrapper id="tax" style="py-16 lg:min-h-[100vh]">
      <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
        <Heading text="Tax" />
        <div className="w-full flex md:flex-row flex-col items-center justify-center gap-10">
          <TaxCard title="Buy Tax" amount="0.05%" />
          <TaxCard title="Sell Tax" amount="0.25%" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Tax;
