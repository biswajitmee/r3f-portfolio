import React  from 'react'
import { useGLTF } from '@react-three/drei'

export function CustomeShape(props) {
  const { nodes, materials } = useGLTF('/shape.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload('/shape.glb')