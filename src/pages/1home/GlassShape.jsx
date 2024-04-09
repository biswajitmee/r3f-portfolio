import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
// import { useControls } from 'leva'

 

export function GlassShape(props) {
  const { nodes, materials } = useGLTF('/glassShape.glb')
 
  const materialPropsG = {
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
        position={[-0.913, 0.621, 0.014]}
        rotation={[0, 0, -1.636]}
        scale={[2.879, 14.466, 3.922]}
      >

        <MeshTransmissionMaterial {...materialPropsG} />

      </mesh>

    </group>
  )
}

useGLTF.preload('/glassShape.glb')
