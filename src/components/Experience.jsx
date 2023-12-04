import { FlyControls, OrbitControls, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { DoubleSide } from 'three'
import PortfolioScene from '../models/PortfolioScene'

import * as THREE from 'three'
import CameraControls from 'camera-controls'
import ComputerScreen from '../models/ComputerScreen'

CameraControls.install({ THREE })

const camPos = {
  0: [9.038196272515794, 6.043369277943344, -6.958425178983971],
  1: [1.343417196396151, 2.486090371342157, 1.5605403102830851],
  2: [2.1640853744370587, 3.635082434267087, 1.6743593348564514],
  3: [-1.2558498488094316, 3.4997121815605867, 1.5945044469891447],
  4: [-1.3082584039978495, 3.503063336432448, 1.6221033884834786],
  5: [0.114, 7.536, 7.671],
  6: [0.145, 7.067, 7.158],
  7: [-0.358, 13.028, 14.442],
  8: [-8.753, 19.442, 13.605],
  9: [-8.753, 19.442, 13.605],
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
      case offset >= 0 && offset < 0.1:
        setCurrentStage(0)
        break
      case offset > 0.1 && offset <= 0.2:
        setCurrentStage(1)
        break
      case offset > 0.2 && offset <= 0.3:
        setCurrentStage(2)
        break
      case offset > 0.3 && offset <= 0.4:
        setCurrentStage(3)
        break
      case offset > 0.4 && offset <= 0.5:
        setCurrentStage(4)
        break
      case offset > 0.5 && offset <= 0.6:
        setCurrentStage(5)
        break
      case offset > 0.6 && offset <= 0.7:
        setCurrentStage(6)
        break
      case offset > 0.7 && offset <= 0.8:
        setCurrentStage(7)
        break
      case offset > 0.8 && offset <= 0.9:
        setCurrentStage(8)
        break
      case offset > 0.9 && offset <= 1:
        setCurrentStage(9)
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
      {/* <OrbitControls target={} /> */}

      <ComputerScreen />
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
  controls.touches.one = CameraControls.ACTION.TOUCH_ROTATE;

  useFrame((state, delta) => {
    state.camera.position.lerp({ x: x, y, z }, 0.5)
    if (look) {
      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
      return controls.update(delta)
    }
  })
}

export default Experience