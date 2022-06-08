import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoDisplay from './TodoDisplay';
import * as React from 'react';
import axios from 'axios';


function TodoPage() {
    const [todos, setTodos] = React.useState([]);
    React.useEffect(() => {
        const getData = async () => { 
            await axios.get('http://localhost:8000/todos').then((res) => {
            const { data } = res;
            setTodos(data)});
        }
    getData();
    console.log('todos: ' + todos);
    },[]);
    return (
    <> 
    <TodoInput/>
    <TodoButton name="hi"/>
    <TodoDisplay todoItems={todos}/>
    </>
    );
}

export default TodoPage;