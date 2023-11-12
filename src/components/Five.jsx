/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/five.glb 
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Five(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/five.glb')
  const { actions, names } = useAnimations(animations, group)
  console.log(names)
  useEffect(() => {
    actions[names[1]].reset().fadeIn(0.5).play()
  }, )
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Node_0" scale={0.01}>
          <group name="Scene_1">
            <group name="offanimation">
              <group name="Building2" position={[28.036, -128.796, 37.597]} rotation={[-Math.PI / 2, -1.396, -Math.PI / 2]} scale={0.117}>
                <group name="Group_21" position={[-2.179, 268.266, 64.415]} scale={0.595}>
                  <mesh name="Merged_Geometry_7001" geometry={nodes.Merged_Geometry_7001.geometry} material={materials.windowsmallroof} position={[0.352, 0, -0.251]} scale={1.237} />
                  <mesh name="Merged_Geometry_8001" geometry={nodes.Merged_Geometry_8001.geometry} material={nodes.Merged_Geometry_8001.material} position={[0.39, -8.171, -0.563]} scale={1.237} />
                </group>
                <group name="Group_22" position={[22.852, 149.515, 91.724]} scale={0.736}>
                  <mesh name="Merged_Geometry" geometry={nodes.Merged_Geometry.geometry} material={materials.windowroof} position={[217.591, 0, -152.062]} rotation={[0, 1.571, 0]} />
                  <mesh name="Merged_Geometry_2" geometry={nodes.Merged_Geometry_2.geometry} material={nodes.Merged_Geometry_2.material} position={[217.591, 0, -152.056]} rotation={[0, 1.571, 0]} />
                  <mesh name="Merged_Geometry_2001" geometry={nodes.Merged_Geometry_2001.geometry} material={nodes.Merged_Geometry_2001.material} position={[-145.99, 0, 223.669]} />
                  <mesh name="Merged_Geometry001" geometry={nodes.Merged_Geometry001.geometry} material={materials.windowroof} position={[-145.984, 0, 223.669]} />
                </group>
                <mesh name="Cube_11" geometry={nodes.Cube_11.geometry} material={materials.building2} position={[-75.763, 163.658, 66.702]} scale={0.595} />
                <mesh name="Cube_18" geometry={nodes.Cube_18.geometry} material={nodes.Cube_18.material} position={[-38.85, 184.937, 220.247]} scale={0.595} />
                <mesh name="Cube_23" geometry={nodes.Cube_23.geometry} material={nodes.Cube_23.material} position={[-166.363, 399.694, -102.644]} rotation={[-Math.PI / 2, 0, 0]} scale={0.595} />
                <mesh name="Merged_Geometry_7" geometry={nodes.Merged_Geometry_7.geometry} material={nodes.Merged_Geometry_7.material} position={[-0.887, 168.156, 46.289]} scale={0.736} />
                <mesh name="Merged_Geometry_8" geometry={nodes.Merged_Geometry_8.geometry} material={nodes.Merged_Geometry_8.material} position={[-9.458, 74.356, 19.24]} scale={0.736} />
              </group>
              <mesh name="rectdesign" geometry={nodes.rectdesign.geometry} material={nodes.rectdesign.material} position={[156.517, 166.229, 23.782]} />
              <mesh name="rectdesignborder" geometry={nodes.rectdesignborder.geometry} material={materials.darkblu} position={[-0.912, 165.236, 18]} />
              <mesh name="rectsearch" geometry={nodes.rectsearch.geometry} material={materials.darkblu} position={[-202.168, 59.365, 25]}>
                <mesh name="search" geometry={nodes.search.geometry} material={materials['light blue']} position={[16.217, 0, 2.811]} scale={[1, 1, 1.817]} />
                <mesh name="searchhand" geometry={nodes.searchhand.geometry} material={materials['light orange']} position={[-69.474, -7.312, 7.877]} rotation={[0, 0, -Math.PI / 6]} />
                <mesh name="searchtorus" geometry={nodes.searchtorus.geometry} material={materials['light orange']} position={[-63.818, 2.734, 9.5]} rotation={[0, 0, -Math.PI / 6]} />
              </mesh>
            </group>
            <group name="onanimation">
              <group name="building1" position={[49.744, 171.243, 55.091]} rotation={[0, 0, 0.262]} scale={0.153}>
                <group name="body" position={[-0.529, 115.035, 1.99]} scale={0.475}>
                  <mesh name="Cube_45" geometry={nodes.Cube_45.geometry} material={materials.body} position={[0, -237.65, -22.706]} scale={[1.043, 1.043, 0.736]} />
                  <mesh name="Cube_46" geometry={nodes.Cube_46.geometry} material={materials.wall} position={[-214.479, -90.258, -104.591]} scale={[1.043, 1.043, 0.736]} />
                  <mesh name="Cube_57" geometry={nodes.Cube_57.geometry} material={nodes.Cube_57.material} position={[-191.991, -244.742, 236.237]} scale={[0.727, 0.727, 0.513]} />
                </group>
                <group name="door" position={[-91.252, 50.693, 23.982]} scale={0.475}>
                  <mesh name="Cube_54" geometry={nodes.Cube_54.geometry} material={materials.door} position={[0, 5.681, 0]} rotation={[0, -1.571, 0]} scale={[0.513, 0.727, 0.727]} />
                  <mesh name="Cube_55" geometry={nodes.Cube_55.geometry} material={materials['window doorframe']} position={[0, 1.982, 0]} rotation={[0, -1.571, 0]} scale={[0.513, 0.727, 0.727]} />
                </group>
                <group name="roof" position={[1.442, 176.459, -8.793]} scale={0.475}>
                  <mesh name="Cube_28" geometry={nodes.Cube_28.geometry} material={nodes.Cube_28.material} position={[-7.13, -110.569, 0]} scale={[1.043, 1.043, 0.736]} />
                  <mesh name="Cube_53" geometry={nodes.Cube_53.geometry} material={materials.roof} position={[-226.004, -97.353, 0]} scale={[1.043, 1.043, 0.736]} />
                  <mesh name="Cube_56" geometry={nodes.Cube_56.geometry} material={nodes.Cube_56.material} position={[50.198, 15.488, -174.237]} scale={[0.727, 0.727, 0.513]} />
                </group>
                <group name="window" position={[-190.561, 64.986, -44.897]} rotation={[0, -1.571, 0]} scale={0.478}>
                  <mesh name="Merged_Geometry002" geometry={nodes.Merged_Geometry002.geometry} material={nodes.Merged_Geometry002.material} position={[0.111, 5.165, -3.54]} />
                  <mesh name="Rectangle_2" geometry={nodes.Rectangle_2.geometry} material={nodes.Rectangle_2.material} position={[0.683, 6.344, -2.66]} scale={0.809} />
                </group>
                <group name="window-2" position={[31.194, 74.209, 103.634]} scale={0.425}>
                  <mesh name="Merged_Geometry_2002" geometry={nodes.Merged_Geometry_2002.geometry} material={materials['window doorframe']} position={[22.755, 1.959, 0.508]} scale={1.237} />
                  <mesh name="Merged_Geometry_3" geometry={nodes.Merged_Geometry_3.geometry} material={nodes.Merged_Geometry_3.material} position={[235.438, 1.959, 0.508]} scale={1.237} />
                  <mesh name="Merged_Geometry_5" geometry={nodes.Merged_Geometry_5.geometry} material={materials.window} position={[129.262, 0.119, 1.088]} scale={1.237} />
                </group>
                <mesh name="wood" geometry={nodes.wood.geometry} material={materials.wood} position={[-97.925, 59.533, 84.023]} scale={0.613} />
              </group>
              <mesh name="newrect1" geometry={nodes.newrect1.geometry} material={materials['light blue']} position={[-169, 198.5, 25]}>
                <mesh name="newtext1" geometry={nodes.newtext1.geometry} material={nodes.newtext1.material} position={[19.881, 12.818, 8]} />
              </mesh>
              <mesh name="newrect4" geometry={nodes.newrect4.geometry} material={materials['dark grey']} position={[-194.364, -78.556, 25]}>
                <mesh name="newtext4" geometry={nodes.newtext4.geometry} material={nodes.newtext4.material} position={[17.968, 9.311, 8]} />
              </mesh>
              <mesh name="newrect5" geometry={nodes.newrect5.geometry} material={materials['light blue glass']} position={[233.895, 49.705, 25]}>
                <mesh name="newtext5" geometry={nodes.newtext5.geometry} material={nodes.newtext5.material} position={[14.749, 7.798, 7]} />
              </mesh>
              <mesh name="newrect6" geometry={nodes.newrect6.geometry} material={materials['light blue']} position={[15.376, -173.814, 25]}>
                <mesh name="newtext6" geometry={nodes.newtext6.geometry} material={nodes.newtext6.material} position={[3.892, 8.722, 7]} />
              </mesh>
              <mesh name="newtext2" geometry={nodes.newtext2.geometry} material={nodes.newtext2.material} position={[-114.394, 115.319, 20.014]} />
              <mesh name="newtext3" geometry={nodes.newtext3.geometry} material={nodes.newtext3.material} position={[-114.394, 1.627, 20.014]} />
            </group>
            <group name="static">
              <group name="shovel" position={[-82.222, -66.035, 29.678]} rotation={[0, 0, -0.452]} scale={0.81}>
                <mesh name="blade" geometry={nodes.blade.geometry} material={materials['spade black']} position={[0, -11.992, -5.256]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.906, 0.88, 0.88]} />
                <mesh name="grip" geometry={nodes.grip.geometry} material={materials['spade shaft']} position={[0.013, 48.352, -2.981]} rotation={[1.53, 0, Math.PI / 2]} scale={[0.333, 1.937, 0.529]} />
                <mesh name="handle" geometry={nodes.handle.geometry} material={materials['spade black']} position={[-0.001, 33.47, -2.348]} rotation={[-0.041, 0, 0]} scale={[0.708, 0.708, 0.718]} />
                <mesh name="screw_down" geometry={nodes.screw_down.geometry} material={nodes.screw_down.material} position={[1.6, -2.71, -1.494]} rotation={[1.53, 0, -Math.PI / 2]} scale={[0.189, 0.126, 0.189]} />
                <mesh name="screw_down001" geometry={nodes.screw_down001.geometry} material={nodes.screw_down001.material} position={[-1.6, -2.71, -1.494]} rotation={[-1.612, 0, Math.PI / 2]} scale={[0.189, 0.126, 0.189]} />
                <mesh name="screw_up" geometry={nodes.screw_up.geometry} material={nodes.screw_up.material} position={[16.728, -10.339, -5.012]} rotation={[1.53, 0, 0]} scale={[1, 0.963, 1]} />
                <mesh name="shaft" geometry={nodes.shaft.geometry} material={materials['spade shaft']} position={[0, 0.871, -1.43]} rotation={[-0.003, 1.571, 0]} scale={0.623} />
              </group>
              <group name="Street_Road" position={[158.576, -300.234, 269.732]} rotation={[0, -1.396, 0]} scale={[1.077, 1, 1.552]}>
                <mesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['dark grey']} position={[-15.063, 3.75, 58.602]} scale={[1.213, 0.005, 0.285]} />
                <mesh name="line" geometry={nodes.line.geometry} material={nodes.line.material} position={[-14.91, 4.356, 58.716]} />
                <mesh name="Triangle" geometry={nodes.Triangle.geometry} material={nodes.Triangle.material} position={[-35.813, 6.264, 6.206]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.016, 0.019, 0.009]} />
                <mesh name="Triangle_2" geometry={nodes.Triangle_2.geometry} material={nodes.Triangle_2.material} position={[10.984, 6.264, 117.904]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.016, 0.019, 0.009]} />
              </group>
              <mesh name="Backdrop" geometry={nodes.Backdrop.geometry} material={materials.background} position={[161.668, 356.805, 698.252]} />
              <mesh name="bgmain" geometry={nodes.bgmain.geometry} material={materials['light orange']} position={[0, 0, 15]} />
              <mesh name="bgmiddle" geometry={nodes.bgmiddle.geometry} material={materials['dark grey']} position={[47.082, 90.905, 21.432]}>
                <mesh name="bgmini" geometry={nodes.bgmini.geometry} material={materials.darkblu} position={[0.006, -5.702, 3.569]}>
                  <mesh name="percentage" geometry={nodes.percentage.geometry} material={nodes.percentage.material} position={[34.886, 3.734, 10]} />
                  <mesh name="rectswitch" geometry={nodes.rectswitch.geometry} material={materials.greyblu} position={[-23.299, 0.648, 5]} />
                  <mesh name="Star" geometry={nodes.Star.geometry} material={materials['light blue']} position={[33.755, 1.24, 5]} />
                </mesh>
                <mesh name="Ellipse" geometry={nodes.Ellipse.geometry} material={materials.oxblood} position={[1.23, 96.014, 3.569]} scale={[1, 1, 1.609]} />
              </mesh>
              <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials.oxblood} position={[-155, -172, 33]} />
              <mesh name="static_rectangles" geometry={nodes.static_rectangles.geometry} material={materials.greyblu} position={[43.275, -39.182, 27.58]} scale={[2.222, 1, 0.45]}>
                <mesh name="Rectangle_15" geometry={nodes.Rectangle_15.geometry} material={materials.greyblu} position={[-5.382, 51.992, 0]} scale={[0.783, 1, 1]} />
                <mesh name="Rectangle_16" geometry={nodes.Rectangle_16.geometry} material={materials.greyblu} position={[0, 26.538, 0]} />
              </mesh>
            </group>
            <mesh name="switch" geometry={nodes['switch'].geometry} material={materials.oxblood} position={[12.633, 85.851, 32]} />
          </group>
        </group>
        <group name="Armature" position={[0.765, -3.011, 1.584]} rotation={[Math.PI / 2, 0, 2.634]} scale={2.575}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/five.glb')
