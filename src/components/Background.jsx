import { Environment, Sphere } from '@react-three/drei'
import React from 'react'

import * as THREE from 'three'

const Background = () => {
  return (
    <>
      <Environment preset='sunset' />
      {/* <ambientLight /> */}
      {/* <pointLight position={[10,10,0]} intensity={1000} /> */}
      <Sphere scale={[50, 50, 50]} rotation-y={Math.PI / 2}>
        <meshStandardMaterial color="#d6e6ff" side={THREE.BackSide} />
      </Sphere>
    </>
  )
}

export default Background