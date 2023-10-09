import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Computers() {
  const Computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[28, 46, 10]}
        castShadow
        angle={1}
        penumbra={1}
        shadow-mapSize={1024}
      />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <primitive
        object={Computer.scene}
        scale={0.65}
        position={[0, -4.25, -1.5]}
        rotation={[-0.01, -0.02, -0.01]}
      />
    </mesh>
  );
}
// Canvas
function ComputersCanvas() {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [25, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Computers />

        <Preload all />
      </Canvas>
    </Suspense>
  );
}
export default ComputersCanvas;
