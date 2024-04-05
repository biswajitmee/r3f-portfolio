import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ShaderMaterial } from 'three';

 

// Import your vertex and fragment shader sources
import vertexShaderSource from './vertexShaderG.glsl';
import fragmentShaderSource from './fragmentShaderG.glsl';

export function Cycle(props) {
  const { nodes, materials } = useGLTF('./cycle.glb')


    // Create a shader material with custom vertex and fragment shaders
    const customMaterial = new ShaderMaterial({
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
      uniforms: props.uniforms, // Pass the uniforms from props
    });


  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.007, 0.026, 0.538]}
        rotation={[2.434, 0, Math.PI]}
        scale={[0.028, 0.498, 0.038]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={customMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={customMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={customMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/cycle.glb')
