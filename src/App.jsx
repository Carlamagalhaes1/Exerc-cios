import { useState } from 'react'
import './App.css'

function App() {
  const [adiconar, setAdionar] = useState([])
  const [mensagem, setMensagem] = useState("")

  const click = () => {
    if (mensagem.trim !==("")){
      setAdionar([...adiconar,mensagem])
    } setMensagem("")
  }

  const mudança = (e) => {
    setMensagem(e.target.value)
  }


  return (
    <div className='container'>
      <div className='quadrado'>
        <h1 className='titulo'>To do List</h1>
        <div className='task-input'>
          <input 
            type="text" 
            className='input' 
            placeholder='Adicionar uma tarefa' 
            value={mensagem}
            onChange={(mudança)}
            
          />
          <button className='button' onClick={(click)} >
            Adicionar
          </button>
        </div>

        <div className='listas'>
          <h2 className='titulo2'>Para fazer</h2>
          <ul>
           {adiconar.map((tarefa, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" />
                  {tarefa}
                </label>
              </li>
           ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
