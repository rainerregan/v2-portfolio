import { Box, Float, Html, OrbitControls, Plane, Scroll, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { DoubleSide } from 'three'
import ComputerScreen from './ComputerScreen'

const camPos = {
  1: [10, 12, 23],
  2: [10, 20, 1],
  3: [2, 12, 20],
  4: [12, 12, 0],
}

const Experience = ({ currentStage, setCurrentStage, setCurrentProgress }) => {
  const [currentCamPos, setCurrentCamPos] = useState(camPos[1])
  const scrollData = useScroll()

  // References
  const planeRef = useRef()

  useFrame(() => {
    const offset = scrollData.offset

    setCurrentProgress(offset)

    switch (true) {
      case offset >= 0 && offset < 0.25:
        setCurrentStage(1)
        break
      case offset > 0.25 && offset <= 0.5:
        setCurrentStage(2)
        break
      case offset > 0.5 && offset <= 0.75:
        setCurrentStage(3)
        break
      case offset > 0.75 && offset <= 1:
        setCurrentStage(4)
        break
      default:
        setCurrentStage(1)
        break
    }
  })

  useEffect(() => {
    if (currentStage !== null) {
      setCurrentCamPos(camPos[currentStage])
    }
  }, [currentStage])

  return (
    <group>
      <CameraRig position={currentCamPos} />

      <ComputerScreen />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh >
      <mesh ref={planeRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <planeGeometry />
        <meshBasicMaterial color="green" side={DoubleSide} />
      </mesh>
    </group >
  )
}

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.06)
    state.camera.lookAt(0, 0, 0)
  })
}


export default Experience