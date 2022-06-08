import Todo from "./TodoInput"

function TodoDisplay(props) {
    return (
        <div>
        {props.todoItems.map((todoItem, index) => ( <p key={index}>{todoItem.description}</p>  ))}
        </div>
    )
}

export default TodoDisplay;