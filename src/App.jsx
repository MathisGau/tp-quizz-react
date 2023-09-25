import { useState } from 'react'
import './App.css'
import Quizz from './components/Quizz'

function App() {
  const [quizz, setQuizz] = useState(false)

  const startQuizz = () => {
    setQuizz(true)
  }

  return (
    <div>
      <h1>Quizz sur les Jeux Vidéo</h1>
      <p>Bienvenue dans notre quizz sur les jeux vidéo. Testez vos connaissances !</p>
      <button onClick={startQuizz}>Démarrer le Quizz</button>
      {quizz && <Quizz />} 
    </div>      
  )
}

export default App