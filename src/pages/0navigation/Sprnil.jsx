import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ShaderMaterial } from 'three';

import { useFrame } from '@react-three/fiber';

// Import your vertex and fragment shader sources
import vertexShaderSource from './vertexShaderG.glsl';
import fragmentShaderSource from './fragmentShaderG.glsl';






export function Sprnil(props) {
  const { nodes, materials } = useGLTF('./sprnil.glb');
  const mesh = useRef();


// Define rotation speed and bounce range
const rotationSpeed = 5.50;
const bounceRange = 0.3;

// Update mesh rotation and position within useFrame hook
useFrame((state, delta) => {
  // Rotate the mesh around its own axis in the y-axis
  mesh.current.rotation.y += rotationSpeed * delta;

  // Bounce the mesh slightly along the x and y axes
  mesh.current.position.x = Math.sin(state.clock.elapsedTime) * bounceRange;
  mesh.current.position.y = Math.cos(state.clock.elapsedTime) * bounceRange;
});


  // Create a shader material with custom vertex and fragment shaders
  const customMaterial = new ShaderMaterial({
    vertexShader: vertexShaderSource,
    fragmentShader: fragmentShaderSource,
    uniforms: props.uniforms, // Pass the uniforms from props
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Spiral.geometry}
        material={customMaterial} // Apply the custom shader material
      />
    </group>
  );
}


