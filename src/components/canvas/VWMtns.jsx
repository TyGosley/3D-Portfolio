/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const VWMtns = ({ isMobile }) => {
  const { scene } = useGLTF("./vwavemtns/scene.gltf");

  // Clean up invalid nodes/materials to avoid shader/NaN crashes
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      // Remove invalid meshes (no geometry or no positions)
      if (
        child.isMesh &&
        (!child.geometry || !child.geometry.attributes?.position)
      ) {
        console.warn("⚠ Removing mesh with invalid geometry:", child);
        child.parent?.remove(child);
        return;
      }

      // Remove invalid Points nodes
      if (child.isPoints && !child.geometry?.attributes?.position) {
        console.warn("⚠ Removing invalid Points object:", child);
        child.parent?.remove(child);
        return;
      }

      // Repair materials
      if (child.isMesh && child.material) {
        child.material.side = THREE.DoubleSide;

        // Remove broken texture refs (prevents shader compile errors)
        if (child.material.map && !child.material.map.image) {
          console.warn("⚠ Removing broken texture map:", child.material.map);
          child.material.map = null;
          child.material.needsUpdate = true;
        }

        // If this were a custom shader but missing source, fall back
        if (
          !child.material.fragmentShader &&
          !child.material.vertexShader &&
          !(child.material instanceof THREE.MeshStandardMaterial)
        ) {
          console.warn(
            "⚠ Replacing unknown material with MeshStandardMaterial"
          );
          child.material = new THREE.MeshStandardMaterial({ color: "gray" });
        }
      }

      // Recompute bounds to squelch NaN bounding sphere issues
      if (child.isMesh && child.geometry) {
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 1.75 : 1.75}
      position={isMobile ? [0, -2, -1] : [0, -3.25, -1]}
      rotation={[0, 0, 0]}
    />
  );
};

const VapeWaveMtns = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-0, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <VWMtns isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default VapeWaveMtns;
