
import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        
        <div className='quadrado'>
          <h1 className='titulo'>To do List</h1>
          <div className='task-input'>
            <input type="text" className='input' placeholder='Adicionar uma tarefa' />
            <button className='button'>
              Adiconar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
