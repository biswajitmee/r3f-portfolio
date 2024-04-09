import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function GradientText(props) {
  const { children, ...restProps } = props;
  const gradientShader = {
    uniforms: {
      color1: { value: new THREE.Vector3(160 / 255, 41 / 255, 105 / 255) },
      color2: { value: new THREE.Vector3(41 / 255, 53 / 255, 160 / 255) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
  };

  return (
    <Text {...restProps}>
      <shaderMaterial attach="material" args={[gradientShader]} />
      {children}
    </Text>
  );
}
