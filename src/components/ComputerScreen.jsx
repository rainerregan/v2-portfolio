import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

const ComputerScreen = () => {
  const { gl, viewport } = useThree()

  return (
    <Html portal={{ current: gl.domElement.parentNode }} position={[0, 10, 0]} fullscreen castShadow receiveShadow occlude="blending" transform>
      <div>
        slkjfjdfslk
      </div>
    </Html>
  )
}

export default ComputerScreen