import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";

import TimeLine from "./TimeLine";

const RoadMap = () => {
  
  return (
    <Wrapper id="roadMap" style="py-16">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Heading text="Road Map" />
        <TimeLine />
      </div>
    </Wrapper>
  );
};

export default RoadMap;
