import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/Button'

function App() {
  const [color, setColor] = useState("olive")
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Pink", "White", "Black","Magenta"];
  var buttons = [];

  for (let i = 0; i < colors.length; i++) {
    buttons.push(<Button colorName={colors[i]} setColor={setColor} />)
  }

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl'>
            {buttons}
          </div>
        </div>

      </div>
    </>
  )
}

export default App
