import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera, SpotLight, Text } from "@react-three/drei";
import { QuantamCube } from './QuantamCube'; 
import { CutRound2 } from './CutRound2';




function FrontCanvas() {
  const fontProps = { fontSize: 1.9, letterSpacing: 0.25, lineHeight: 1, font: "./fonts/Foremost-Regular.otf" }

  return (
    <div>
      <Canvas style={{ height: "100vh", width: "100vw", backgroundColor: "trasparent", }}>

        <QuantamCube />
        <CutRound2 position={[-1, 0, 1]} />
        {/* <Text position={[0, -3, -2]}  {...fontProps}    > Development </Text> */}
      </Canvas>



    </div>
  )
}

export default FrontCanvas