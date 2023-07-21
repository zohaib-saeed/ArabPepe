import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="w-full">
      <Wrapper id="ourTeam" style="py-16 lg:min-h-[100vh]">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="Our Team" />
          <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-10">
            <TeamCard
              picture={"/Assets/OurTeam/farid.webp"}
              role={"Founder"}
              name={"Farid Bouloue"}
            />
            <TeamCard
              picture={"/Assets/OurTeam/nick.svg"}
              role={"Co-Founder/Nurse/Biologist"}
              name={"Nicholas Lukens"}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurTeam;
