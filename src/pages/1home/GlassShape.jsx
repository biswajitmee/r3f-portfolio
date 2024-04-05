import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'





export function GlassShape(props) {
  const { nodes, materials } = useGLTF('/glassShape.glb')



  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.25, min: 0, max: 5, step: 0.01 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1, },
    backside: { value: true },
    anisotropicBlur: { value: 0.2, min: 0, max: 3, step: 0.5 },
    distortion: { value: 1.7, min: 0, max: 3, step: 0.5 },
    distortionScale: { value: 2.2, min: 0, max: 3, step: 0.5 },
  })

  
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

<MeshTransmissionMaterial {...materialProps} />

      </mesh>

    </group>
  )
}

useGLTF.preload('/glassShape.glb')
