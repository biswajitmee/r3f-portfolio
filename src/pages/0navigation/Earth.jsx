import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Earth(props) {
  const { nodes, materials } = useGLTF('/earth.glb');
  const mesh = useRef();

  // Define rotation speed and bounce range
  const rotationSpeed = 0.15;
  const bounceRange = 0.3;

  // Update mesh rotation and position within useFrame hook
  useFrame((state, delta) => {
    // Rotate the mesh around its own axis in the y-axis
    mesh.current.rotation.y += rotationSpeed * delta;

    // Bounce the mesh slightly along the x and y axes
    mesh.current.position.x = Math.sin(state.clock.elapsedTime) * bounceRange;
    mesh.current.position.y = Math.cos(state.clock.elapsedTime) * bounceRange;
  });

  return (
    <group {...props} dispose={null}  ref={mesh} >
      <mesh
       
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh  
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload('/earth.glb');
