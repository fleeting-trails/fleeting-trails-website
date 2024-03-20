import { useState } from 'react'
import memeFace from './assets/meme-face.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={memeFace} className="logo" style={{ height: 300 }} alt="Vite logo" />
        </a>
      </div>
      <h1>Fleeting Trails</h1>
      <p style={{ width: 500 }}>This website will start to wakfu and provide warizz certificate within a short while (approximately 2 years), until then please keep all your projects for us. For the time being the button to count for passtime</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        &#169; All Copyright claim reserves to fleetingtrails.com
      </p>
    </>
  )
}

export default App
