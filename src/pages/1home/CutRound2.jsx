import React, { useRef,useState } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import {  useThree } from '@react-three/fiber'

// import { useControls } from 'leva'

export function CutRound2(props) {


  const { nodes, materials } = useGLTF('./cutRound2.glb')

    const mesh = useRef();
   
    const { viewport } = useThree();
    const fontProps = { fontSize: 1.9, letterSpacing: 0.25, lineHeight: 1, font: "./fonts/Foremost-Regular.otf" }
  
    const materialProps = {
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
  
    // useFrame(() => {
    //   mesh.current.rotation.x += 0.015
    // })

  

  

  return (
    <group {...props} dispose={null}>
      <mesh ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0, -1, 0]}
        // rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
        >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      {/* <Text position={[0, 0, -2]}  {...fontProps}  >Creative Design</Text> */}
    </group>
  )
}

useGLTF.preload('./cutRound2.glb')
