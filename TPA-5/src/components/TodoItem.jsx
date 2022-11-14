import { useRef } from "react"
import '../css/all.css'

const TodoItem = (props) => {
    const{item, updateTodo, removeTodo, completeTodo} = props

    const inputRef = useRef(true)

    const changeFocus = () => {
        inputRef.current.disabled = false 
        inputRef.current.focus()
    }

    const update = (id,value,e) => {

        if (e.which === 13) {
            updateTodo({id, item:value})
            inputRef.current.disabled = true
        }
    }

    return (
        <li key={item.id} className="card">
            <center>
                <textarea ref={inputRef} 
                disabled={inputRef} 
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
            </center> 
                    
            <div className="btns">
                <button onClick={() => changeFocus()}><box-icon type='solid' name='edit-alt'></box-icon></button>
                <button onClick={() => completeTodo(item.id)}><box-icon type='solid' name='check-square'></box-icon></button>
                <button onClick={ () => removeTodo(item.id)}><box-icon type='solid' name='trash'></box-icon></button> {" "} 
            </div>

            {item.completed && <span className="completed">done</span>}

        </li>
    )
}

export default TodoItem