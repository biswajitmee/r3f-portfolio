import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

export function QuantamCube(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./cube.glb')
  const { actions } = useAnimations(animations, group)

  
  useEffect(() => {
    const mixer = new AnimationMixer(group.current);
    // Find the animation action by name or index
    const animationAction = mixer.clipAction(animations[0]); // Replace with the correct animation index or name
    // Set the desired loop behavior
    animationAction.loop = LoopRepeat;
    // Play the animation
    animationAction.play();

    const animate = () => {
      mixer.update(0.015); // Adjust the animation speed here
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube001_3" scale={5.653}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material_3}
                />
              </group>
              <group name="Cube002_2" scale={5.653}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Cube003_4" scale={5.653}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Cube004_5" scale={5.653}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.material_5}
                />
              </group>
              <group name="Cube005_6" scale={5.653}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material_6}
                />
              </group>
              <group name="Cube006_7" scale={5.653}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material_7}
                />
              </group>
              <group name="Cube007_8" scale={5.653}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material_8}
                />
              </group>
              <group name="Cube008_9" scale={5.653}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material_9}
                />
              </group>
              <group name="Cube009_10" scale={5.653}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.material_10}
                />
              </group>
              <group name="Cube010_11" scale={5.653}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.material_11}
                />
              </group>
              <group name="Cube_1" scale={-0.147}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.cube}
                />
              </group>
              <group name="Sphere_0" rotation={[0, 0.013, 0]} scale={55.366} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./cube.glb')
