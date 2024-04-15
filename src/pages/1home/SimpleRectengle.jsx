import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial, useFaceControls } from '@react-three/drei'
  import { useControls } from 'leva'



export function SimpleRectengle(props) {
  const { nodes, materials } = useGLTF('/SimpleRectengle.glb')

  const materialProps = useControls({
    thickness: 0.2,
    roughness: 0.25,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    anisotropicBlur: 0.2,
    distortion: 1.7,
    distortionScale: 2.2,
  });



  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[8.839, 5.745, 4.999]}
      >
           <MeshTransmissionMaterial {...materialProps} />
</mesh>

    </group>
  )
}

useGLTF.preload('/SimpleRectengle.glb')