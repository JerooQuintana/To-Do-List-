import {useState} from 'react'
import './App.css';
import { Formulario } from "./component/Formulario";
import {Tarea} from "./component/Tareas"

function App() {

  const [tarea, setTarea] = useState('')
  const [listadoTarea, setListadoTarea] = useState([]) 

  function handleSubmit(e){
    e.preventDefault()

    if(tarea === ''){
      alert('Ingresa una tarea')
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }
    
    const temp = [nuevaTarea, ...listadoTarea]
    setListadoTarea(temp)
    setTarea('')
  }


  function handleChange(e){
    setTarea(e.target.value)
    console.log(tarea)
  }

  function onActualizarTarea(objEditarTarea){
    const {id, tarea} = objEditarTarea

    const temp = [...listadoTarea]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    setListadoTarea(temp)

  }

  function onBorrarTarea(id){
    const temp = listadoTarea.filter(item => item.id !== id)
    setListadoTarea(temp)
  }

  return (
    <>
   <div className='contenedorprincipal'>
    <h1>
      Lista de Tareas
    </h1>
    <div className='contenedorformulario'>
      <Formulario
      tarea={tarea}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      />

    </div>
    <div className='contenedorTareas'>
      <h2> Tareas</h2>
      <div className='contenedorInfoTareas'>
        {
          listadoTarea.map(tarea =>(
            <Tarea 
            key={tarea.id}
            id={tarea.id}
            tarea={tarea}
            onActualizarTarea = {onActualizarTarea}
            onBorrarTarea ={onBorrarTarea}/>
          ))
        }

      </div>

    </div>

   </div>
    </>
    
    
  );
}

export default App;
