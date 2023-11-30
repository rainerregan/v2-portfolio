import { OrbitControls, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'

const camPos = {
  1: [10,12,53],
  2: [0,2,1],
  3: [2,12,42],
  4: [12,42,0],
}

const Experience = () => {
  const [currentCamPos, setCurrentCamPos] = useState(camPos[1])
  const scrollData = useScroll()

  useFrame(() => {
    const offset = scrollData.offset
    console.log(offset);
    switch(true) {
      case offset >= 0 && offset < 0.25:
        setCurrentCamPos(camPos[1])
        break
      case offset > 0.25 && offset <= 0.5:
        setCurrentCamPos(camPos[2])
        break
      case offset > 0.5 && offset <= 0.75:
        setCurrentCamPos(camPos[3])
        break
      case offset > 0.75 && offset <= 1:
        setCurrentCamPos(camPos[4])
        break
      default:
        setCurrentCamPos(camPos[1])
        break
    }
  })

  return (
    <mesh>
      <CameraRig position={currentCamPos} />
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.01)
    state.camera.lookAt(0, 0, 0)
  })
}


export default Experience