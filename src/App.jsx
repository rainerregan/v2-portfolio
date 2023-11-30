import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import Experience from './components/Experience'

const App = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [currentProgress, setCurrentProgress] = useState(0)

  return (
    <main className='w-full h-screen flex relative'>
      <div className='h-1 bg-blue-800 absolute z-10 top-0' style={{ width : (currentProgress * 100) + "%"}} />
      <Canvas className='w-full h-screen'>
        <ScrollControls pages={8} damping={0.15}>
          <Experience
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            setCurrentProgress={setCurrentProgress}
          />
        </ScrollControls>
      </Canvas>
    </main>
  )
}

export default App