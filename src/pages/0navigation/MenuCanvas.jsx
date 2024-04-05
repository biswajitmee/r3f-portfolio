import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sprnil } from './Sprnil';
import { Earth } from './Earth';
import vertexShader from './vertexShaderG.glsl';
import fragmentShader from './fragmentShaderG.glsl';

const MenuCanvas = () => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const sprnilRef = useRef();
  const earthRef = useRef();

  // Function to handle position change of Sprnil and Earth components
  const handlePositionChange = (menuItem) => {
    let sprnilPosition = [0, 0, 0];
    let earthPosition = [0, 0, 0];

    if (menuItem === 'Home') {
      sprnilPosition = [-1, 2, 1];
      earthPosition = [1, 2, 3];
    } else if (menuItem === 'About me') {
      sprnilPosition = [-1, 3, 4];
      earthPosition = [1, 5, 1];
    } else if (menuItem === 'My journey') {
      sprnilPosition = [-1, 3, 4];
      earthPosition = [1, 3, 4];
    }

    sprnilRef.current.position.set(...sprnilPosition);
    earthRef.current.position.set(...earthPosition);
  };

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw', backgroundColor:"#000000" }}
      onPointerOver={(event) => {
        // Check if the event target has a 'data-menu-item' attribute
        const menuItem = event.target.dataset.menuItem;
        if (menuItem) {
          setHoveredMenuItem(menuItem);
          handlePositionChange(menuItem);
        }
      }}
      onPointerOut={() => setHoveredMenuItem(null)}
    >
      <ambientLight intensity={Math.PI / 2} />
      <Sprnil ref={sprnilRef} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      <Earth ref={earthRef} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      <PerspectiveCamera />
      <OrbitControls />
    </Canvas>
  );
};

export default MenuCanvas;
