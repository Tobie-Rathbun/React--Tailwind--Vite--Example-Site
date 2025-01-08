import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./scifi-computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.65} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Initial 3D Object Position and Rotation */}
      <primitive
        object={computer.scene}
        scale={0.48}
        position={[2, -1.4, 0]}
        rotation={[0, 100, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas 
      frameloop="demand"
      shadowscamera={{position: [0, 0, 10], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;