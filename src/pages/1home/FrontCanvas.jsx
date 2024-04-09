import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll, Scroll, Text, Plane, GradientTexture, Float } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import theatreState from "./theatreState.json";
import GradientText from "./GradientText";
import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
// studio.initialize();
// studio.extend(extension);

import BreakCode from "./BreakCode";
import { QuantamCube } from './QuantamCube';
import { CutRound2 } from './CutRound2';
import { SimpleFlower } from "./SimpleFlower";
import { Rectangle } from "./Rectangle";
import { GlassShape } from "./glassShape";
import { CutTbe } from "./CutTbe";
import { Dimond } from "./Dimond";
import { Sharpnel } from "./Sharpnel";



export default function FrontCanvas() {
  const sheet = getProject("myProject", { state: theatreState }).sheet("Scene");
  const [mouse, setMouse] = useState([0, 0]);
  const handleMouseMove = (event) => {
    setMouse([event.clientX, event.clientY]);
  };



  const isMobile = window.innerWidth <= 768; // Adjust the width breakpoint as needed
  const pages = isMobile ? 9 : 8.5;


  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ScrollControls pages={pages} distance={2} damping={0.5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>

          <Scroll html style={{ position: "absolute", width: "100vw" }}>



          </Scroll>
        </ScrollControls>



      </Canvas>
    </div>
  );
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();


  useFrame(() => {

    const sequenceLength = val(sheet.sequence.pointer.length);

    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  const bgColor = "#0A0A0A";



 
  const deploymentFont = { font: "./fonts/zengo/ZengoDemo.ttf", fontSize: 4, letterSpacing: 0.15, lineHeight: 1, }

  const designFont = { font: "./fonts/foremost/Foremost-Regular.otf", fontSize: 5, letterSpacing: 0.016, lineHeight: 1, }
  const makeFont = { font: "./fonts/foremost/Foremost-Regular.otf", fontSize: 1, letterSpacing: 0.15, lineHeight: 1, }

  const developFont = { font: "./fonts/foremost/Foremost-Regular.otf", fontSize: 5, letterSpacing: 0.016, lineHeight: 1, }


  return (
    <>
      <color attach="background" args={[bgColor]} />
      <e.pointLight theatreKey="LightBlue" position={[0, 0, 1]} />
      <e.pointLight theatreKey="LightPurple" position={[0, 0, -2]} />
      <e.pointLight theatreKey="LightWhite" position={[-1, 0, -1]} />


      {/* <e.mesh theatreKey="QuantamCube" position={[0, 0, -1]}>
                <QuantamCube />
      </e.mesh> */}
      {/* <e.mesh theatreKey="CutRound2" position={[0, 0, -1]}>
                <CutRound2 />
      </e.mesh> */}
      {/* <e.mesh theatreKey="CutTbe" position={[0, 0, -1]} >
                <CutTbe />
      </e.mesh> */}

      <e.mesh theatreKey="Design" position={[0, 0, -1]} >
        <GradientText {...designFont} >Design</GradientText>
      </e.mesh>

      <e.mesh theatreKey="make" position={[0, 0, -1]}>
        <Text  {...makeFont}  >that make difference..</Text>
      </e.mesh>

      <e.mesh theatreKey="plane" position={[0, 0, -1]}>
        <mesh>
          <planeGeometry args={[20, 15]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={['#D7771F', '#6110E4']}
              size={1024} />
          </meshBasicMaterial>
        </mesh>
      </e.mesh>

    

      <e.mesh theatreKey="Deployment" position={[0, 0, -1]}>
        <Text  {...deploymentFont}  >Deployment</Text>
      </e.mesh>

      <e.mesh theatreKey="flower" position={[0, 0, -1]} >
        <SimpleFlower />
      </e.mesh>

      <e.mesh theatreKey="rectengale" position={[0, 0, -1]} >
        <Rectangle />
      </e.mesh>

      {/* <e.mesh theatreKey="GlassShape"  position={[0, 0, -1]} >
      <GlassShape />
      </e.mesh> */}




      <e.mesh theatreKey="Dimond" position={[0, 0, -1]} >
        <Dimond />
      </e.mesh>

      <e.mesh theatreKey="Development" position={[0, 0, -1]}>
        <Text  {...developFont}  >Development</Text>
      </e.mesh>


      <e.mesh theatreKey="attractive" position={[0, 0, -1]}>
        <Text  {...makeFont}  >that make attractive..</Text>
      </e.mesh>


      <e.mesh theatreKey="Sharpnel" position={[0, 0, -1]}> 
      <Float>
      <Sharpnel />
       </Float>
     
      </e.mesh>













      <PerspectiveCamera
        position={[0, 0, 0]}
        theatreKey="Camera"
        makeDefault
        near={5}
        far={500}
        fov={15}
      />
    </>
  );
}
