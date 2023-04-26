export function Formulario (props){

    const {tarea, handleSubmit, handleChange} = props

    return(
        <form   onSubmit={handleSubmit}>
           <input 
           className="todo-input"
           type="text"
           placeHolder="ingrese la tarea"
           onChange={handleChange}
           value={tarea}
           />
           <input type="submit"
           class="todo-btn"
           value="AGREGAR"
           onClick={handleSubmit}/>
        </form>
    )
}