import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, StandardMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders';

// Import components
import HomePage from '../1home/HomePage';
import AboutMe from '../2about/AboutMe';
import MyJourney from '../3journey/MyJourney';

function BabylonScene() {
  const canvasRef = useRef(null);
  let engine, scene, mesh1, mesh2;

  useEffect(() => {
    const initializeScene = () => {
      engine = new Engine(canvasRef.current, true);
      scene = new Scene(engine);

      const camera = new ArcRotateCamera('camera', 10, Math.PI / 2, 5, Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

      // Disable camera rotation
      camera.inputs.removeByType("ArcRotateCameraPointersInput");

      const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

      // Load GLB files
      SceneLoader.ImportMesh('', './shape1.glb', '', scene, function (meshes) {
        console.log('Loaded meshes:', meshes);
        const material = new StandardMaterial('material', scene);
        const texture = new Texture('./texture3.jpg', scene);
        material.diffuseTexture = texture;
        meshes.forEach(mesh => {
          mesh.material = material;
          mesh1 = mesh;
          mesh.position = new Vector3(-3, -0.5, 0); // Adjust position as needed
          mesh.scaling = new Vector3(0.3, 0.3, 0.3); // Adjust scale as needed
        });
      });

      SceneLoader.ImportMesh('', './sprnil.glb', '', scene, function (meshes) {
        console.log('Loaded meshes:', meshes);
        const material = new StandardMaterial('material', scene);
        const texture = new Texture('./texture6.jpg', scene);
        material.diffuseTexture = texture;
        meshes.forEach(mesh => {
          mesh.material = material;
          mesh2 = mesh;
          mesh.position = new Vector3(-1, 0, 0); // Adjust position as needed
          mesh.scaling = new Vector3(0.5, 0.5, 0.5); // Adjust scale as needed
        });
      });

      engine.runRenderLoop(() => {
        scene.render();
      });
    };

    const moveMeshWithCursor = (event) => {
      if (mesh1 && mesh2) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        mesh1.position.x = (x / rect.width - 0.5) * 10;
        mesh1.position.y = -(y / rect.width - 0.5) * 10;

        mesh2.position.x = (x / rect.width - 0.5) * 10;
        mesh2.position.y = +(y / rect.height - 0.5) * 10;
      }
    };

    if (canvasRef.current) {
      initializeScene();
      canvasRef.current.addEventListener('mousemove', moveMeshWithCursor);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousemove', moveMeshWithCursor);
      }
      if (scene) {
        scene.dispose();
        engine.dispose();
        scene = null;
        engine = null;
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let mesh1, mesh2; // Define mesh variables here

  const handleMenuHover = () => {
    // Move meshes to the center position
    if (mesh1 && mesh2) {
      mesh1.position = Vector3.Zero();
      mesh2.position = Vector3.Zero();
    }
  };

  return (
    <Router basename="/">
      <div>
        <div className="menuIcon" onClick={toggleMenu}>Menu click</div>
        <div className={`navBackground ${isMenuOpen ? 'show' : ''}`}>
          <div className="canvas">
            {isMenuOpen && <BabylonScene />}
          </div>
          <div className='navCanvas '>
            <ul className='flex flex-col'>
              <li className="my-4 text-7xl menu-item" onMouseEnter={() => handleMenuHover(new Vector3(0, 0, 0))}><Link to="/home" onClick={toggleMenu}>Home</Link></li>
              <li className="my-4 text-7xl menu-item" onMouseEnter={() => handleMenuHover(new Vector3(0, 0, 0))}><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li className="my-4 text-7xl menu-item" onMouseEnter={() => handleMenuHover(new Vector3(0, 0, 0))}><Link to="/journey" onClick={toggleMenu}>Journey</Link></li>
              <li className="my-4 text-7xl menu-item">Portfolio</li>
              <li className="my-4 text-7xl menu-item">Contact me</li>
            </ul> 
            
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/journey" element={<MyJourney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
