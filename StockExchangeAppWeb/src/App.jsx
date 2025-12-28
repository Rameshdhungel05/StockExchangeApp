import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   return (
   <>
      <div className="app">
          <aside className="outer-left">
          <h1>VStock</h1>
          <p>Menu</p>
          </aside>

          <div className="page">

            <div className="left-panel">
              <p>left-panel (70%)</p>
            </div>

            <div className="right-panel">
              <p>right-panel (30%)</p>
            </div>
          </div>


        </div>

    </>
  )
}

export default App
