//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import './styles/global.css'
import { Habit } from './components/Habit'

function App() {
 // const [count, setCount] = useState(0)

  return (

    <div>
      <Habit completed={3}/>
      <Habit  completed={6}/>
      <Habit  completed={2}/>
  </div>
  /*   
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    */
  )
}

export default App

// componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual
// ou comportamental