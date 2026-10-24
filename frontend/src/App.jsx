import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState(0)
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    });
  })
  return (
    <>
      <h1>hello world</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke, index) =>{
          retrun(
            <div key={jokes.id}>
              <h2>{jokes.title}</h2>
              <p>{jokes.content}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
