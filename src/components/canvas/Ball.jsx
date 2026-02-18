/* eslint-disable react/no-unknown-property */
import React, { useRef, useCallback } from "react";
import { Decal, Float, useTexture } from "@react-three/drei";

const DRAG_SPEED = 0.01; // tweak to taste

// eslint-disable-next-line react/prop-types
export default function Ball({ icon, position = [0, 0, 0] }) {
  const [tex] = useTexture([icon]);
  const group = useRef();
  const isDragging = useRef(false);
  const last = useRef([0, 0]);

  const onPointerDown = useCallback((e) => {
    e.stopPropagation();
    isDragging.current = true;
    last.current = [e.clientX, e.clientY];
    e.target.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current || !group.current) return;
    const [lx, ly] = last.current;
    const dx = e.clientX - lx;
    const dy = e.clientY - ly;
    last.current = [e.clientX, e.clientY];

    group.current.rotation.y += dx * DRAG_SPEED;
    group.current.rotation.x += dy * DRAG_SPEED;
  }, []);

  const endDrag = useCallback((e) => {
    e.stopPropagation();
    isDragging.current = false;
    e.target.releasePointerCapture?.(e.pointerId);
  }, []);

  return (
    <group position={position}>
      {/* Float translates only; no auto-rotation so it doesn't fight dragging */}
      <Float speed={0.9} rotationIntensity={0} floatIntensity={0.8}>
        <group
          ref={group}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerOut={endDrag}
          onPointerLeave={endDrag}
        >
          <mesh castShadow receiveShadow scale={2.10}>{/* was 1.2 */}
            <icosahedronGeometry args={[0.6, 2]} />
            <meshStandardMaterial
              color="#fff8eb"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
            {icon ? (
              // was 0.6
              <Decal
                position={[0, 0, 0.62]}
                rotation={[0, 0, 0]}
                // was 0.55
                scale={0.605}
                map={tex}
                flatShading
              />
            ) : null}
          </mesh>
        </group>
      </Float>
    </group>
  );
}
