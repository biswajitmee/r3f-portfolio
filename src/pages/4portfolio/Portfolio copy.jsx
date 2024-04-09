import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';

const Portfolio = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -5), scene);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, -6), scene);

    camera.rotation.x = 0;
    camera.rotation.y = 1.7;
    camera.rotation.z = 0;

    camera.position.z = 0.5;
    camera.position.x = -1.2;
    camera.position.y = 0;

    camera.attachControl(canvas, true);

    const imagePlanes = [];
    const numImages = 6;
    const shapeRadius = 3;

    const createImagePlane = (imageUrl, angle) => {
      const plane = BABYLON.MeshBuilder.CreatePlane("imagePlane", { width: 6, height: 3 }, scene);
      const position = new BABYLON.Vector3(
        shapeRadius * Math.cos(angle),
        shapeRadius * Math.sin(angle),
        0
      );

      plane.position.copyFrom(position);

      const material = new BABYLON.StandardMaterial("imageMaterial", scene);
      material.diffuseTexture = new BABYLON.Texture(imageUrl, scene);

      plane.material = material;
      imagePlanes.push(plane);
    };

    for (let i = 0; i < numImages; i++) {
      const angle = (Math.PI * 2 * i) / numImages;
      createImagePlane(`image${i}.jpg`, angle);
    }

    // Register the shader code
    BABYLON.Effect.ShadersStore["squeezeFragmentShader"] = `
      precision highp float;
      varying vec2 vUV;
      uniform sampler2D textureSampler;

      void main(void) {
        vec2 uv = vUV;

        // Apply squeeze effect
        uv.x = uv.x * (0.8 + 0.2 * sin(uv.y * 2.0));
        uv.y = uv.y * (0.8 + 0.2 * cos(uv.x * 2.0));

        // Sample the original scene with modified coordinates
        gl_FragColor = texture2D(textureSampler, uv);
      }
    `;

    // Create the post-process
    const postProcess = new BABYLON.PostProcess("Squeeze", "squeeze", [], ["textureSampler"], 1.0, camera);

    // Smooth scrolling variables
    let targetScrollPosition = 0;
    let currentScrollPosition = 0;
    const scrollSmoothingFactor = 0.1;

    window.addEventListener("wheel", function (e) {
      targetScrollPosition += e.deltaY * 0.002;
    });

    const animate = () => {
      // Gradually move currentScrollPosition towards targetScrollPosition
      currentScrollPosition += (targetScrollPosition - currentScrollPosition) * scrollSmoothingFactor;

      for (let i = 0; i < numImages; i++) {
        const plane = imagePlanes[i];
        const radius = 4.5;

        const position = new BABYLON.Vector3(
          radius * Math.cos(currentScrollPosition + i * Math.PI * 2 / numImages),
          radius * Math.sin(currentScrollPosition + i * Math.PI * 2 / numImages),
          0
        );
        plane.position.copyFrom(position);
        plane.rotation.y = Math.atan2(plane.position.x, plane.position.z);
      }

      window.requestAnimationFrame(animate);
    };

    animate();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", function () {
      engine.resize();
    });

    return () => {
      engine.stopRenderLoop();
      window.removeEventListener("resize", function () {
        engine.resize();
      });
    };
  }, []);

  return <canvas ref={canvasRef} id="renderCanvas" style={{ width: '100%', height: '100vh', touchAction: 'none' }}></canvas>;
};

export default Portfolio;
