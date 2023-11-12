/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import Five from "./Five"
import { OrbitControls } from "@react-three/drei"
import Interface from "./Interface"
// import Interface from './components/Interface'


export default function Experience() {
  return (
    <>
        <Canvas 
        style={{width: `100vw`, height: `100vh`, backgroundColor: '#3F94CD', margin: 0}} >
        <OrbitControls enableZoom={false} enableRotate={false}/>
        {/* <ambientLight intensity={0.1}/> */}
        <directionalLight  color="white" position={[50, 50, 50]} />
        <Five />
        </Canvas>
        <Interface />
    </>
  )
}
