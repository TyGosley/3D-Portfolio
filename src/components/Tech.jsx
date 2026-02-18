// eslint-disable-next-line no-unused-vars
import React, { Suspense, useMemo, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Ball from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

function useCols() {
  const [cols, setCols] = useState(5);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return setCols(3); // mobile
      if (w < 1024) return setCols(4); // tablet
      return setCols(6); // desktop
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return cols;
}

function BallsField({ techList }) {
  const cols = useCols();
  const gap = 2.8;

  const rows = Math.ceil(techList.length / cols);
  const xCenter = (cols - 1) / 2;
  const yCenter = (rows - 1) / 2;

  return (
    <>
      {techList.map((t, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col - xCenter) * gap;
        const y = (yCenter - row) * gap;
        return <Ball key={t.name || i} icon={t.icon} position={[x, y, 0]} />;
      })}
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  // skip entries without an icon
  const techList = useMemo(
    () => (technologies || []).filter((t) => !!t.icon),
    []
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className={`${styles.sectionHeadText} mt-10`}>Technologies.</h2>

      {/* helper line (small, clear) */}
      <p className="text-secondary text-[14px] sm:text-[15px] -mt-2">
        Proficient across these tools — drag any bubble to rotate it.
      </p>

      <div
        className="w-full max-w-6xl h-[520px] rounded-xl overflow-hidden"
        aria-label="Interactive grid of technology icons; drag any bubble to rotate it."
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 17], fov: 45 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight intensity={0.9} position={[6, 6, 8]} />

          <Suspense fallback={null}>
            <BallsField techList={techList} />
            <Preload all />
          </Suspense>

          {/* Balls rotate on drag; keep scene static */}
          <OrbitControls
            enableRotate={false}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
