
import React  from 'react'
import { useGLTF } from '@react-three/drei'
import { ShaderMaterial } from 'three';

import vertexShaderSource from './GlobeVertexShader.glsl';
import fragmentShaderSource from './GlobeFragmentShadery.glsl';




export function GlobeSimple(props) {
  const { nodes, materials } = useGLTF('/cutRound2.glb')

  

  const customMaterial = new ShaderMaterial({
    vertexShader: vertexShaderSource,
    fragmentShader: fragmentShaderSource,
    uniforms: {
      u_resolution: { value: [window.innerWidth, window.innerHeight] },

      ...props.uniforms, // You can pass additional uniforms here
    },
  });

    

    return (
      <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={customMaterial} 
        position={[-0.1, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
    )
}

useGLTF.preload('/cutRound2.glb')
