import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationMixer, LoopRepeat } from "three";


export function SimpleFlower(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./simple_flower_loop.glb')
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
      mixer.update(0.001); // Adjust the animation speed here
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);





  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.011, 0.036, -0.044]}
          rotation={[-0.039, 0.372, -1.557]}
          scale={3.387}>
          <group name="d9519426e61142ddacee8e1492ac5ef6abccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group name="MorphMainGroup">
                  <mesh
                    name="timeshift4"
                    castShadow
                    receiveShadow
                    geometry={nodes.timeshift4.geometry}
                    material={materials.timeshift4}
                    morphTargetDictionary={nodes.timeshift4.morphTargetDictionary}
                    morphTargetInfluences={nodes.timeshift4.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/simple_flower_loop.glb')