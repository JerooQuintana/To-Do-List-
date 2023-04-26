import { useState } from "react"

export function Tarea(props){
    const {tarea, onActualizarTarea, onBorrarTarea} = props

    const [editando, setEditando] = useState(false)

    const [estaCompletado, setEstaCompletado] = useState(false)

    function ModoEdicionActivado(){

       const [valor, setValor] = useState(tarea.tarea)
       function handleChange (e){
        const
         text = e.target.value
         setValor(text)
       }

       function handleClick(e){
        e.preventDefault()

        onActualizarTarea(
           {
            id: tarea.id,
            tarea: valor,
            completado: false
           }
        )
        setEditando(false)
       }

        return(
            <>
            <input
            className="todo-input"
            type="text"
            onChange={handleChange}
            value={valor}/>
             <button className="btn"
             onClick={handleClick}>
                GUARDAR
             </button>
             <button className="btn"
             onClick={()=> onBorrarTarea(tarea.id)}>
                BORRAR
             </button>
             
            </>
        );
    }function ModoEdicionDesactivado(){
        return(
            <>
            <span
            className={estaCompletado ? "todoTarea completed" : "todoTarea" }
            onClick={() => setEstaCompletado(!estaCompletado)}>
                {tarea.tarea}</span>
            <button className="btn"
            onClick={() => setEditando(true)}>
                MODIFICAR
            </button>
            <button className="btn"
            onClick={()=> onBorrarTarea(tarea.id)}>
                BORRAR
            </button>
            </>
        );
    }

    return(
        <div className="contenedorTarea" id={tarea.id}>
            {
                editando
                ? <ModoEdicionActivado/>
                : <ModoEdicionDesactivado/>
            }

        </div>
    )
}