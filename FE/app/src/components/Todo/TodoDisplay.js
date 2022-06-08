function TodoDisplay(props) {
    return (
        <div>
        {props.todoItems.map((todoItem, index) => (
        <>
        <p style={{ textDecoration: `${todoItem.completed ? "line-through" : ""}`}} key={index}>{todoItem.description}</p> 
        </>
        ))}
        </div>
    )
}

export default TodoDisplay;