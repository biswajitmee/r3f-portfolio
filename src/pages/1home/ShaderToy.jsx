import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Define the shader material using the provided fragment and vertex shaders
const CustomShaderMaterial = shaderMaterial(
  // Uniforms
  { iTime: 0, iResolution: new THREE.Vector2() },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  // Fragment Shader
  `
  uniform float iTime;
  uniform vec2 iResolution;

  // Paste the provided fragment shader code here

  void mainImage( out vec4 O, vec2 u )
  {
      u = ( u / iResolution.x - .5 ) * GRID_SIZE;
      float t = iTime * .02,
            S = sin(t), C = cos(t);
      u *= mat2(-C, S, S, C);
      u.x += iTime*1.;
      
      #ifdef VARY_WIDTH
      CURVE_WIDTH = mix(.05, .25, (sin(u.x+sin(u.y))+sin(u.y*.35))*.25+.5);
      #endif
      
      vec2 s = vec2(1.,R3),
           a = mod(u     ,s)*2.-s,
           b = mod(u+s*.5,s)*2.-s;
  
      u /= s;
      
      float da = dot(a, a);
      float db = dot(b, b);
      
      vec2 id = da < db 
                    ? floor(u) 
                    : floor(u+=.5)-.5;
      
      
      float n = N21(id);
      #ifdef REWIRE
      n = N21(id+vec2(floor(iTime*.1+n)));
      #endif
      O = Truchet(fract(u), n).rgbb;
      
      float outline = S(.7, 1.2, min(da, db));
      O.b = max(O.b, outline*.5);
  }
  void main() {
    vec4 fragColor;
    mainImage(fragColor, gl_FragCoord.xy);
    gl_FragColor = fragColor;
  }
  `
);

// Extend Three.js with the custom shader material
extend({ CustomShaderMaterial });

const ShaderToy = () => {
  const material = useRef();
  const { viewport } = useThree(); // Access the viewport size

  // Update shader uniform values every frame
  useFrame(({ clock }) => {
    if (material.current) {
      material.current.uniforms.iTime.value = clock.elapsedTime;
      material.current.uniforms.iResolution.value.set(viewport.width, viewport.height); // Use viewport width and height
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <customShaderMaterial ref={material} />
    </mesh>
  );
};

export default ShaderToy;
