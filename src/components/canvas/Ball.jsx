import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }) => {
  const Ball = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);

    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
      </Float>
    );
  };

  const ResetOrbitControls = () => {
    const { camera } = useThree();
    const orbitRef = useRef();
    const [resetting, setResetting] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);

    const initialPosition = useRef(camera.position.clone());
    const initialTarget = useRef(new THREE.Vector3(0, 0, 0)); 

    const handleOrbitControlsStart = () => {
      setIsInteracting(true); 
    };

    const handleOrbitControlsEnd = () => {
      setIsInteracting(false); 
    };

    useEffect(() => {
      if (!isInteracting) {
        const timer = setTimeout(() => setResetting(true), 0);
        return () => clearTimeout(timer); // Cleanup timer
      }
    }, [isInteracting]);

    useFrame(() => {
      if (resetting && !isInteracting && orbitRef.current) {
        const orbit = orbitRef.current;

        // Convert initial and current positions to spherical coordinates
        const currentSpherical = new THREE.Spherical().setFromVector3(camera.position);
        const targetSpherical = new THREE.Spherical().setFromVector3(initialPosition.current);

        // Interpolate angles and radius for smooth arc movement
        currentSpherical.phi += (targetSpherical.phi - currentSpherical.phi) * 0.1;
        currentSpherical.theta += (targetSpherical.theta - currentSpherical.theta) * 0.1;
        currentSpherical.radius += (targetSpherical.radius - currentSpherical.radius) * 0.1;

        // Convert spherical coordinates back to Cartesian coordinates
        const newPosition = new THREE.Vector3().setFromSpherical(currentSpherical);
        camera.position.copy(newPosition);

        // Smoothly interpolate the target position
        orbit.target.lerp(initialTarget.current, 0.1);

        // Update OrbitControls
        orbit.update();

        // Stop resetting once close enough
        if (
          camera.position.distanceTo(initialPosition.current) < 0.01 &&
          orbit.target.distanceTo(initialTarget.current) < 0.01
        ) {
          camera.position.copy(initialPosition.current);
          orbit.target.copy(initialTarget.current);
          orbit.update();
          setResetting(false);
        }
      }
    });

    return (
      <OrbitControls
        ref={orbitRef}
        enableZoom={true}
        enableRotate={true}
        onStart={handleOrbitControlsStart}
        onEnd={handleOrbitControlsEnd}
      />
    );
  };

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <ResetOrbitControls />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
