import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'


export function Rectangle(props) {
  const { nodes, materials } = useGLTF('/reectangle.glb')


  const materialPropsR = {
    thickness: 0.2,
    roughness: 0.25,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    anisotropicBlur: 0.2,
    distortion: 1.7,
    distortionScale: 2.2,
  };
 


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        // scale={[6, 24, 38]}
        scale={[4, 11, 8]}

        rotation={[15, 20,90]}
      >
   <MeshTransmissionMaterial {...materialPropsR} />

        </mesh>
    </group>
  )
}

useGLTF.preload('/reectangle.glb')