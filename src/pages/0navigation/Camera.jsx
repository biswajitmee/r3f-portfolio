import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ShaderMaterial } from 'three';

import { useFrame } from '@react-three/fiber';

// Import your vertex and fragment shader sources
import vertexShaderSource from './vertexShaderG.glsl';
import fragmentShaderSource from './fragmentShaderG.glsl';

export function Camera(props) {
  const { nodes, materials } = useGLTF('/camera.glb')




  const moveingCamera = useRef();


  // Define rotation speed and bounce range
  const rotationSpeed = 0.50;
  const bounceRange = 0.1;
  
  // Update mesh rotation and position within useFrame hook
  useFrame((state, delta) => {
    // Rotate the mesh around its own axis in the y-axis
    moveingCamera.current.rotation.y += rotationSpeed * delta;
  
    // Bounce the mesh slightly along the x and y axes
    moveingCamera.current.position.x = Math.sin(state.clock.elapsedTime) * bounceRange;
    moveingCamera.current.position.y = Math.cos(state.clock.elapsedTime) * bounceRange;
  });




  const customMaterial = new ShaderMaterial({
    vertexShader: vertexShaderSource,
    fragmentShader: fragmentShaderSource,
    uniforms: props.uniforms, // Pass the uniforms from props
  });

  return (
    <group {...props} dispose={null}>
      <group  ref={moveingCamera}>
      <group position={[0, 30, -20]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder032_17_-_Default_0'].geometry}
          material={customMaterial}
          position={[-55, 0, -30]}
        />
      </group>
      <group position={[-9.306, 68.5, -19.188]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder033_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[-64.306, -0.812, -8.5]}
        />
      </group>
      <group position={[0, 30, -20]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object001_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[-55, 0, -30]}
        />
      </group>
      <group position={[11.77, 77.989, -21.585]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder042_01_-_D1efault_0'].geometry}
          material={customMaterial}
 
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box007_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, -0.258, -2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object002_s_0.geometry}
          material={customMaterial}
          position={[0, -0.258, -2]}
        />
      </group>
      <group
        position={[-40.708, 57.621, -34.964]}
        rotation={[Math.PI, 0, -0.611]}
        scale={[0.619, 0.619, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape003_01_-_D1efault_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group position={[-53.522, 73.011, -21.311]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 5.252]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_w_0.geometry}
            material={customMaterial}
            position={[0, 0, -0.405]}
          />
        </group>
        <group position={[0, 7.372, -2.108]} rotation={[-Math.PI / 2, 0, -0.611]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder049_01_-_Defaultzz_0'].geometry}
            material={customMaterial}
            position={[0, 0, -0.064]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape002_s_0.geometry}
          material={customMaterial}
          position={[0, 0, 4.884]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder047_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.116]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_w_0.geometry}
          material={customMaterial}
          position={[0, 0, -5.616]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder019_01_-_D1efault_0'].geometry}
          material={materials['01_-_D1efault']}
          position={[0, 0, -0.116]}
        />
      </group>
      <group
        position={[3.452, 57.621, -34.964]}
        rotation={[Math.PI, 0, 0.698]}
        scale={[0.619, 0.619, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape004_01_-_D1efault_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[45.392, 57.621, -34.964]}
        rotation={[Math.PI, 0, -1.309]}
        scale={[0.619, 0.619, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape005_01_-_D1efault_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group position={[0, 30, -20]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object004_18_-_Default_0'].geometry}
          material={customMaterial}
          position={[-55, 0, -30]}
        />
      </group>
      <group position={[0, 30, -20]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object005_18_-_Defaults_0'].geometry}
          material={customMaterial}
          position={[-55, 0, -30]}
        />
      </group>
      <group position={[5.822, 31.282, 37.489]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder053_18_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.5]}
        />
      </group>
      <group
        position={[24.383, 65.234, -5.391]}
        rotation={[0, 0, -2.88]}
        scale={[0.781, 0.781, 0.873]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape006_01_-_D1efault_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[50.72, 57.602, -5.009]}
        rotation={[0, 0, 2.531]}
        scale={[0.619, 0.619, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape007_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[-37.749, 57.602, -5.009]}
        rotation={[0, 0, -1.658]}
        scale={[0.619, 0.619, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape008_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[5.634, 62.166, -5.239]}
        rotation={[0, 0, -2.007]}
        scale={[0.445, 0.445, 0.692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape009_01_-_D1efault_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[42.963, 14.32, -5.391]}
        rotation={[0, 0, -2.443]}
        scale={[0.781, 0.781, 0.873]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape010_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group
        position={[-29.359, 14.32, -5.391]}
        rotation={[0, 0, -2.967]}
        scale={[0.781, 0.781, 0.873]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape011_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.28]}
        />
      </group>
      <group position={[5.822, 31.282, 36.526]} scale={[0.924, 0.924, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape013_17_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.5]}
        />
      </group>
      <group position={[5.822, 31.282, 34.966]} scale={[0.738, 0.738, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape014_18_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -0.5]}
        />
      </group>
      <group position={[-14.987, 80.588, -18.756]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_w_0.geometry}
          material={customMaterial}
          position={[0, 0, -3.588]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object003_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, -3.588]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder027_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0, 0.088]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_s_0.geometry}
          material={customMaterial}
          position={[0, 0, 3.088]}
        />
      </group>
      <group position={[-40.364, 24.778, -4.161]} rotation={[Math.PI / 2, -0.873, -Math.PI]}>
        <group
          position={[0, -0.4, 0]}
          rotation={[Math.PI / 2, 0, -2.967]}
          scale={[0.932, 0.932, 1.042]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape015_01_-_Defaultz_0'].geometry}
            material={customMaterial}
            position={[0, 0, -0.28]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder060_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0.418, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder061_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0.22, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder062_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0.007, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder059_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 1.054, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_w_0.geometry}
          material={customMaterial}
          position={[0.402, -0.265, 12.107]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_w_0.geometry}
         material={customMaterial}
          position={[0.402, -0.044, 12.107]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_w_0.geometry}
         material={customMaterial}
          position={[0.402, 0.19, 12.107]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_w_0.geometry}
         material={customMaterial}
          position={[0.402, 0.418, 12.107]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.826, 0.826, 1]}
        />
      </group>
      <group position={[-51.764, -2, -18.9]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder030_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, 2]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder070_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0, 2]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_w_0.geometry}
         material={customMaterial}
          position={[0, 0, 1.875]}
          rotation={[-Math.PI, 0, 0]}
        />
      </group>
      <group position={[52.351, -2, -18.9]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder071_01_-_Default_0'].geometry}
          material={customMaterial}
          position={[0, 0, 2]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_w_0.geometry}
         material={customMaterial}
          position={[0, 0, 1.875]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cylinder073_01_-_Defaultz_0'].geometry}
          material={customMaterial}
          position={[0, 0, 2]}
          rotation={[-Math.PI, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder021_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[-32.261, 77, -26.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_w_0.geometry}
       material={customMaterial}
        position={[-32.261, 82, -26.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031_w_0.geometry}
       material={customMaterial}
        position={[6.673, 0, -16.107]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder034_01_-_Defaultzz_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, -5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder035_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder036_18_-_Defaultsw_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, -1]}
        scale={[1.051, 1.051, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037_s_0.geometry}
        material={materials.material_6}
        position={[5.822, 31.282, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder038_18_-_Defaultsws_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 10]}
        scale={[0.954, 0.954, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder039_03_-_Default_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder040_18_-_Defaultsw_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 26.649]}
        scale={[0.975, 0.975, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder041_18_-_Defaultsws_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder043_18_-_Default_0'].geometry}
        material={customMaterial}
        position={[34.66, 68.229, -33]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box008_17_-_Default_0'].geometry}
        material={customMaterial}
        position={[34.66, 63.163, -32.048]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023_s_0.geometry}
        material={customMaterial}
        position={[52.213, 60.755, -19.592]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder024_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[52.213, 68.755, -19.592]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shape_w_0.geometry}
       material={customMaterial}
        position={[52.213, 60, -19.592]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder044_17_-_Default_0'].geometry}
        material={customMaterial}
        position={[52.213, 60.511, -19.592]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder045_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[56.66, 60.25, -7.045]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050_s_0.geometry}
        material={materials.material_6}
        position={[-32.261, 79, -26.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder051_01_-_Default_0'].geometry}
        material={customMaterial}
        position={[-32.261, 79.5, -26.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder046_17_-_Default_0'].geometry}
        material={customMaterial}
        position={[-53.522, 67, -21.311]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder052_01_-_D1efault_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 26.649]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder054_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[-34.985, 66.691, -5.513]}
        scale={[0.826, 0.826, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder055_18_-_Default_0'].geometry}
        material={customMaterial}
        position={[-34.985, 66.691, -5.513]}
        scale={[0.417, 0.417, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Sphere001_24_-_Default_0'].geometry}
        material={customMaterial}
        position={[5.822, 31.282, 34.097]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.355]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder056_01_-_Defaultz_0'].geometry}
        material={customMaterial}
        position={[-42.376, 50.434, -5.574]}
        scale={[0.742, 0.742, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder057_01_-_Default_0'].geometry}
        material={customMaterial}
        position={[-42.376, 50.434, -5.392]}
        scale={[0.826, 0.826, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder058_18_-_Default_0'].geometry}
        material={customMaterial}
        position={[-40.364, 24.778, -7.433]}
        scale={[0.826, 0.826, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box009_23_-_Default_0'].geometry}
        material={customMaterial}
        position={[37.676, 61.997, -6.841]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box010_23_-_Default_0'].geometry}
        material={customMaterial}
        position={[34.851, 65.493, -32.285]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.42, 0.645, 0.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box011_23_-_Default_0'].geometry}
        material={customMaterial}
        position={[-2.602, 66.113, -6.033]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.447, 1, 0.447]}
      />
    </group>
    </group>
  )
}

useGLTF.preload('/camera.glb')