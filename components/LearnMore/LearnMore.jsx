import React, { Suspense } from "react";
import Wrapper from "../shared/Wrapper";
import Tokenomics from "./Tokenomics";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const LearnMore = () => {
  return (
    <Wrapper id="learnMore" style="py-16 ">
      <div className="w-full h-full grid lg:grid-cols-2 gap-8 md:gap-2 lg:gap-8 overflow-hidden">
        <div className="w-full overflow-hidden">
          <Canvas
            className="w-full"
            camera={{ position: [5, 5, 5], fov: 25 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>

        <Tokenomics />
      </div>
    </Wrapper>
  );
};

export default LearnMore;
