// eslint-disable-next-line no-unused-vars
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Ball from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

function BallsField({ techList }) {
  const cols = 5; // how many columns in the grid
  const gap = 2.4; // spacing between balls

  return (
    <>
      {techList.map((t, i) => {
        const x = (i % cols) * gap - ((cols - 1) * gap) / 2;
        const y = -Math.floor(i / cols) * gap + 2;
        return <Ball key={t.name || i} icon={t.icon} position={[x, y, 0]} />;
      })}
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  // Skip entries that don't have an icon to prevent null texture loads
  const techList = useMemo(
    () => (technologies || []).filter((t) => !!t.icon),
    []
  );

  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className={`${styles.sectionHeadText} mt-10`}>Technologies.</h2>

      <div className="w-full max-w-5xl h-[420px] rounded-xl overflow-hidden">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 12], fov: 45 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.9} position={[5, 5, 5]} />

          <Suspense fallback={null}>
            <BallsField techList={techList} />
            <Preload all />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
          />
        </Canvas>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "");
