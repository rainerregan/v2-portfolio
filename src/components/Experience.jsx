import { OrbitControls, Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { DoubleSide } from 'three'

const camPos = {
  1: [10, 12, 23],
  2: [10, 20, 1],
  3: [2, 12, 20],
  4: [12, 12, 0],
}

const Experience = ({ currentStage, setCurrentStage, setCurrentProgress }) => {
  const [currentCamPos, setCurrentCamPos] = useState(camPos[1])
  const scrollData = useScroll()

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
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 10]}>
        {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
        <planeGeometry />
        {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
        <meshBasicMaterial color="green" side={DoubleSide} />
      </mesh>
    </group>
  )
}

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.06)
    state.camera.lookAt(0, 0, 0)
  })
}


export default Experience