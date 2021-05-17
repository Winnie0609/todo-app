import React from "react"

function Todo({ text, todo, todos, setTodos }) {
    function deleteHandleChange(){
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    function CompleteHandleChange(){
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        })
        )
    }
    
    return(
        
        <div className="todo">
            <button className="check-btn" onClick={CompleteHandleChange}>
                <i className={`fas fa-check fa-xs ${todo.completed? "completed-checkbox" : ""}`}></i>
            </button>

            <li className={`todo-item ${todo.completed? "completed " : ""}`}>{text}</li>
            
            <button className="trash-btn" onClick={deleteHandleChange}>
                <i className="fas fa-times fa-xs"></i>
            </button>
        </div>
    )
}

export default Todo