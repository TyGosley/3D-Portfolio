/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Decal, Float, useTexture } from "@react-three/drei";

// eslint-disable-next-line react/prop-types
function IconDecal({ icon }) {
  const [tex] = useTexture([icon]);
  return (
    <Decal
      position={[0, 0, 1]}
      rotation={[2 * Math.PI, 0, 6.25]}
      scale={1}
      map={tex}
      flatShading
    />
  );
}

// eslint-disable-next-line react/prop-types
const Ball = ({ icon, position = [0, 0, 0] }) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {icon ? <IconDecal icon={icon} /> : null}
      </mesh>
    </Float>
  );
};

export default Ball;
