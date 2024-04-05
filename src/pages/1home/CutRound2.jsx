import React, { useRef,useState } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import { useControls } from 'leva'

export function CutRound2(props) {


  const { nodes, materials } = useGLTF('./cutRound2.glb')

    const mesh = useRef();
   
    const { viewport } = useThree();
    const fontProps = { fontSize: 1.9, letterSpacing: 0.25, lineHeight: 1, font: "./fonts/Foremost-Regular.otf" }
  
    const materialProps = useControls({
      thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
      roughness: { value: 0.35, min: 0, max: 5, step: 0.01 },
      transmission: { value: 1, min: 0, max: 1, step: 0.1 },
      ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
      chromaticAberration: { value: 0.02, min: 0, max: 1, },
      backside: { value: true },
      anisotropicBlur: { value: 0.2, min: 0, max: 3, step: 0.5 },
      distortion: { value: 1.7, min: 0, max: 3, step: 0.5 },
      distortionScale: { value: 2.2, min: 0, max: 3, step: 0.5 },
    })
  
    useFrame(() => {
      mesh.current.rotation.x += 0.015
    })

  

  

  return (
    <group {...props} dispose={null}>
      <mesh ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0, -1, 0]}
        // rotation={[-Math.PI / 2, 0, 0]}
        >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      {/* <Text position={[0, 0, -2]}  {...fontProps}  >Creative Design</Text> */}
    </group>
  )
}

useGLTF.preload('./cutRound2.glb')
