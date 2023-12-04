import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

const ComputerScreen = () => {
  const { gl, viewport } = useThree()

  return (
    <Html portal={{ current: gl.domElement.parentNode }}
      position={[1.35, 2.427, 2.605]}
      scale={[0.0377, 0.0377, 0.0377]}
      rotation={[0.07, 3.14122, 0]}
      fullscreen castShadow receiveShadow occlude="blending" transform >
      <iframe title="embed" width={1920} height={1080} src="https://exacode.io/" frameBorder={0} />
    </Html>
  )
}

export default ComputerScreen