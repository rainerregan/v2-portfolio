import { FlyControls, OrbitControls, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { DoubleSide } from 'three'
import PortfolioScene from '../models/PortfolioScene'

import * as THREE from 'three'
import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

const camPos = {
  0: [9.038196272515794, 6.043369277943344, -6.958425178983971],
  1: [1.3273417196396151, 2.486090371342157, 1.1605403102830851],
  2: [2.1640853744370587, 3.635082434267087, 1.6743593348564514],
  3: [-1.2558498488094316, 3.4997121815605867, 1.5945044469891447],
  4: [-1.3082584039978495, 3.503063336432448, 1.6221033884834786],
  5: [-1.2558498488094316, 3.4997121815605867, 1.5945044469891447],
  6: [-1.2558498488094316, 3.4997121815605867, 1.5945044469891447],
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

  return (
    <group>
      <CameraRig position={currentCamPos} look={currentLook} />

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
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const scrollData = useScroll()
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  useFrame((state, delta) => {
    const offset = 1 - scrollData.offset

    state.camera.position.lerp({ x, y, z }, 0.6)
    // var look = new THREE.Vector3(0, 0, 0)
    // if (targetObject) {
    //   if (targetObject?.position?.x === 0 && targetObject?.position?.y === 0 && targetObject?.position?.z === 0) look = targetObject?.parent?.position
    //   else look = targetObject?.position
    // }
    // look.x = Math.sin(state.clock.getElapsedTime() * 2)
    // state.camera.lookAt(look)
    // state.camera.updateProjectionMatrix();
    if (look) {
      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
      return controls.update(delta)
    }
  })

  // return (
  //   <OrbitControls target={look} enableZoom={false} />
  // )
}

export default Experience