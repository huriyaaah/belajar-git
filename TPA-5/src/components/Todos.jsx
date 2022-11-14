import { useRef, useState } from "react"
import { connect } from "react-redux"
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer/reducer"
import '../css/all.css'

const mapStateToProps = (state) => {
    return {
        todos : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id))
    }
}

function Todos (props) {
    
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
    }

    console.log("props from store", props);

    return (
        <>
        <div className="addTodos">
            <form onSubmit={handleChange}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} className="todo-input" />
                <button type="submit" className="add-btn" onClick={() => props.addTodo ({
                    id: Math.floor(Math.random()*1000),
                    item: todo,
                    completed: false,
                })}>Add</button>
            </form>
            
            <br />

        </div>
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)