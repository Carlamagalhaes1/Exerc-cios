import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Usuarios() {

    const navigate = useNavigate()

    const volta = () => {
        navigate("/")
    }

    const [number, setNumber] = useState("")
    const [muda, setMuda] = useState("")
     const mudanca = (e) => {
        setMuda(e.target.value)
      }
          
    

    const onClick = () => {
        const valor = parseInt(muda)

        if (!isNaN(valor)) {
            if (valor % 2 === 0){
                setNumber("par")
            } else {
                setNumber("impar")
            }
        } else {
            setNumber("digie um num valido")
        } setMuda("")
        

        
            
       
        
    }
    

    


    return(
        <div > 
            <button onClick={(volta)}>
                voltar
            </button>
            <label className="flex">
                Digite um Number:
                <input type="text" value={muda} onChange={(mudanca)}  />

            </label>
            <button onClick={(onClick)}>Enviar</button>
            <p>{number}</p>
        </div>
    )
    
}