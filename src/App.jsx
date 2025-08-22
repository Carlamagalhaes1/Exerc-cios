import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Todolist } from "./pages/todolist";
import { Usuarios } from "./pages/usuarios";

function App() {
  
  


  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Todolist/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
     </Routes>
     </BrowserRouter>
    
    
    
  );
}

export default App
