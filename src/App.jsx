import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './components/Experience'

const App = () => {
  return (
    <main className='w-full h-screen flex relative justify-center items-center'>
      <Canvas className='w-full h-screen'>
        <ScrollControls pages={8} damping={0.25}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </main>
  )
}

export default App