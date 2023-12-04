/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import scene from '../assets/3d/PortfolioScene.glb'

const PortfolioScene = ({ setCurrentLook, setCurrentFocus, positionRef, ...props }) => {
  const { nodes, materials } = useGLTF(scene);
  return (
    <group {...props} dispose={null}>
      <group scale={[3.574, 0.087, 3.574]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials["Material.034"]}
        />
      </group>
      <group position={[-3.486, 2.839, -1.778]} scale={[0.197, 1.322, 1.027]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.037"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Frame.geometry}
        material={materials["Material.009"]}
        position={[-0.607, 0.618, -1.443]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.143, 0.415, 0.143]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bed.geometry}
          material={nodes.Bed.material}
          position={[8.703, 1.073, -15.98]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[9, 3.092, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.005"]}
          position={[11.146, 2.115, -27.895]}
          rotation={[0.378, -0.087, 0.013]}
          scale={[-5.887, -1.5, -6.918]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[4.535, 2.115, -24.815]}
          rotation={[0.647, 0.136, -0.191]}
          scale={[-3.776, -1.459, -3.852]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sheet.geometry}
          material={materials["Material.010"]}
          position={[8.703, 1.112, -15.785]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[8.919, 3.016, 8.778]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parquet.geometry}
        material={materials.base}
        scale={[3.574, 0.087, 3.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Meja.geometry}
        material={materials["Material.003"]}
        position={[1.379, 1.561, 2.503]}
        scale={[1.641, 0.048, 0.846]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.008"]}
          position={[-0.889, -12.479, -0.778]}
          scale={[0.046, 19.099, 0.089]}
        />
      </mesh>
      <group
        position={[1.366, 1.022, 1.651]}
        rotation={[-Math.PI, 0.272, -Math.PI]}
        scale={[-0.542, -0.041, -0.542]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_3.geometry}
          material={materials.base}
        />
      </group>
      <group
        position={[1.35, 2.427, 2.632]}
        rotation={[-3.073, 0, 0]}
        scale={[1.086, 0.522, 0.032]}
        // onClick={(e) => setCurrentFocus(e)}
        ref={ref => {
          positionRef.current[0] = ref
          positionRef.current[1] = ref
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={materials["Material.016"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rak_2.geometry}
        material={materials["Material.014"]}
        position={[1.924, 2.991, 3.127]}
        scale={[1.334, 0.034, 0.342]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard.geometry}
        material={nodes.Keyboard.material}
        position={[1.487, 1.628, 2.089]}
        scale={[-0.359, -0.013, -0.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tangga.geometry}
        material={materials["Material.025"]}
        position={[3.453, 3.359, 7.039]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.238, 0.632, 1.238]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa.geometry}
        material={materials["Material.026"]}
        position={[1.966, 4.853, 7.063]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.665, 0.234, 1.096]}
      />
      <group position={[-2.642, 5.129, 7.106]} scale={[0.637, 0.581, 2.663]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <group
        position={[-2.645, 7.067, 7.158]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.094, -1.104, -2.305]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[-3.364, 3.322, 1.259]} scale={[0.069, 0.857, 1.796]}
      ref={ref => positionRef.current[4] = ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <group
        position={[-1.425, 3.392, 3.377]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.066, 0.823, 1.725]}
        ref={ref => positionRef.current[3] = ref}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials["Material.020"]}
        />
      </group>
      <group
        position={[0.114, 7.536, 10.671]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.066, 1.387, 2.742]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials["Material.019"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder.geometry}
        material={materials.base}
        position={[4.975, 7.136, 10.671]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.085, -2.26, -0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Meja_Tamu.geometry}
        material={materials["Material.006"]}
        position={[-0.577, 4.906, 7.387]}
        scale={[0.789, 0.339, 1.515]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Meja_Dapur.geometry}
        material={materials.Material}
        position={[1.329, 10.614, 14.374]}
        scale={[3.969, 0.085, 3.493]}
      />
      <group position={[-3.358, 13.028, 14.442]} scale={[0.114, 1.426, 2.989]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials["Material.030"]}
        />
      </group>
      <group position={[-10.753, 19.442, 13.605]} scale={[0.08, 0.993, 2.08]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials["Material.029"]}
        />
      </group>
      <group position={[2.95, 10, 15.695]} scale={[0.078, 0.498, 0.078]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials["Material.031"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladder001.geometry}
        material={materials.base}
        position={[-4.052, 12.757, 10.671]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.085, -2.26, -0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Karpet.geometry}
        material={materials["Material.038"]}
        position={[1.482, 9.409, 14.318]}
        scale={1.415}
      />
      <group position={[0.058, 9.104, 10.632]} scale={[2.966, 0.028, 0.303]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_2.geometry}
          material={materials["Material.028"]}
        />
      </group>
      <group
        position={[1.881, 3.818, 3.377]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.051, 0.639, 1.339]}
        ref={ref => positionRef.current[2] = ref}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group
        position={[-3.151, 14.749, 14.49]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2.966, 0.028, 0.303]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials["Material.028"]}
        />
      </group>
      <group
        position={[-7.298, 17.74, 17.044]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-2.539, -2.678, -0.721]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials["Material.036"]}
        />
      </group>
    </group>
  );
}

export default PortfolioScene