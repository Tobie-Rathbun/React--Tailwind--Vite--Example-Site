import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Frog = () => {
  const frog = useGLTF("./frog-jump/scene.gltf");

  return (
    <primitive object={frog.scene} scale={0.75} position-y={0} rotation-y={0} />
  );
};

const FrogCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <ambientLight intensity={0.5} />
        <pointLight 
          position={[0, 0, 0]} 
          intensity={1} 
          distance={10} 
        />

        <Frog />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FrogCanvas;