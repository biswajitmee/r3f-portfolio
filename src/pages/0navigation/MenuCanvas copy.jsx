import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sprnil } from './Sprnil';
import vertexShader from './vertexShaderG.glsl';
import fragmentShader from './fragmentShaderG.glsl';
import { Earth } from './Earth';

const uniforms = {
  topColor: { value: new THREE.Color(0xff0000) },
  bottomColor: { value: new THREE.Color(0x0000ff) },
};

const MenuCanvas = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', backgroundColor:"#000000", }}>
    <ambientLight intensity={Math.PI / 2} />
      <Sprnil
        position={[0, -3, 1]}
        scale={0.5}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
      <Earth scale={0.2} 
      position={[5,0,-2]}
      uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      />
     
      <PerspectiveCamera />
    </Canvas>
  );
};

export default MenuCanvas;
