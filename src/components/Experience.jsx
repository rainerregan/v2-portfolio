import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { DoubleSide } from 'three'
import PortfolioScene from '../models/PortfolioScene'

import * as THREE from 'three'

const camPos = {
  0: [9.038196272515794, 6.043369277943344, -6.958425178983971],
  1: [1.3273417196396151, 2.486090371342157, 1.1605403102830851],
  2: [2, 12, 20],
  3: [12, 12, 0],
}

const camLook = {
  1: [9.038196272515794, 6.043369277943344, -6.958425178983971],
  2: [1.3273417196396151, 2.486090371342157, 1.1605403102830851],
  3: [2, 12, 20],
  4: [12, 12, 0],
}

const Experience = ({ currentStage, setCurrentStage, setCurrentProgress }) => {
  const [currentCamPos, setCurrentCamPos] = useState(camPos[1])
  const scrollData = useScroll()
  const [currentLook, setCurrentLook] = useState(new THREE.Vector3(0, 0, 0))
  const [currentFocus, setCurrentFocus] = useState(null)

  // References
  const planeRef = useRef()
  const positionRef = useRef([])

  useFrame((state) => {
    const offset = scrollData.offset
    const cameraPosition = state.camera.position
    const cameraRotation = state.camera.rotation

    // console.log(cameraPosition);

    setCurrentProgress(offset)

    switch (true) {
      case offset >= 0 && offset < 0.25:
        setCurrentStage(0)
        break
      case offset > 0.25 && offset <= 0.5:
        setCurrentStage(1)
        break
      case offset > 0.5 && offset <= 0.75:
        setCurrentStage(2)
        break
      case offset > 0.75 && offset <= 1:
        setCurrentStage(3)
        break
      default:
        setCurrentStage(0)
        break
    }
  })

  useEffect(() => {
    if (currentStage !== null && positionRef !== null) {
      const currentRef = positionRef.current[currentStage]
      const currentRefLook = currentRef?.position ?? new THREE.Vector3(0, 0, 0)

      setCurrentCamPos(camPos[currentStage])
      setCurrentLook(currentRefLook)
    }
  }, [currentStage])

  useEffect(() => {
    // console.log(currentFocus.object.parent.position);
    if (currentFocus?.position?.x === 0 && currentFocus?.position?.y === 0 && currentFocus?.position?.z === 0) {

    }
  }, [currentFocus])

  return (
    <group>
      <CameraRig position={currentCamPos} look={currentLook} />
      {/* <OrbitControls /> */}

      {/* <ComputerScreen /> */}
      <PortfolioScene scale={[1, 1, 1]} setCurrentLook={setCurrentLook} setCurrentFocus={setCurrentFocus} positionRef={positionRef} />
      <mesh ref={planeRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <planeGeometry />
        <meshBasicMaterial color="#7da5ff" side={DoubleSide} />
      </mesh>
    </group >
  )
}

function CameraRig({ position: [x, y, z], look }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.06)
    // var look = new THREE.Vector3(0, 0, 0)
    // if (targetObject) {
    //   if (targetObject?.position?.x === 0 && targetObject?.position?.y === 0 && targetObject?.position?.z === 0) look = targetObject?.parent?.position
    //   else look = targetObject?.position
    // }
    state.camera.lookAt(look)
    state.camera.updateProjectionMatrix();
  })
}

export default Experience