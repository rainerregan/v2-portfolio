import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

const ComputerScreen = () => {
  const { gl, viewport } = useThree()

  return (
    <Html portal={{ current: gl.domElement.parentNode }} position={[0, 10, 0]} fullscreen castShadow receiveShadow occlude="blending" transform scale={[0.5, 0.5, 0.5]}>
      <iframe title="embed" width={1920} height={1080} src="https://exacode.io/" frameBorder={0} />
    </Html>
  )
}

export default ComputerScreen