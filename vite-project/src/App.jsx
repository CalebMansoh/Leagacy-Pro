import { useState } from 'react'
import viteLogo from '/logo.png'
import mainImage from '/121.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

        <div className='flex flex-row justify-center text-center items-center gap-3 pl-10'>
          <div className='w-1/3'>
          <img src={viteLogo} alt="Logo" />
          <p><strong>Share This Fox Link</strong></p>
          <p className='border border-solid border-black'>
          https://randomfox.ca/?i=121
          </p>
          <p>Fox Count: 124</p>
          <a href="https://github.com/xinitrc-ls/randomfox.ca" className='text-blue-700 underline underline-offset-8'>Add more floor</a>
          <p>
          Submit more foxes?<br />(We accept links only)<br/>Here: <a href="https://github.com/xinitrc-ls/randomfox.ca" className='text-blue-700 underline underline-offset-8'>Github</a> or <a href="contact@xinitrc.ca"  className='text-blue-700 underline underline-offset-8'>Email</a>
          </p>
          </div>

          <div>
            <a href="https://randomfox.ca/?i=121">
              <img src={mainImage} alt="Fox" className='w-6/6 pr-3 pt-4'/>
            </a>
            <br />
            <p className='pt-6'>Made by: xinitrc</p>
          </div>

        </div>

    </>
  )
}

export default App
