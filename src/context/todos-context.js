import React, {useState} from "react";

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

export const TodosContextProvider = (props) => {

    //set this state as an empty array
    const [todos, setTodos] = useState([]);

    // ADD
    const addTodo = (todo) => {
        let oldTodos = todos;
        //add item to end of array
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    // DELETE
    const deleteTodo = (todoId) => {
        let oldTodos = todos;

        const todoIndex = todos.findIndex (
            (todo) => {
                return (todo.id == todoId)
            }
        ); 

        //delete 1 item from todos using its location, splicing it
        if (todoIndex !== -1) {
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos]);
        }
    }

    // UPDATE
    const updateTodo = (todoId, isComplete) => {
        let oldTodos = todos;

        const todoIndex = todos.findIndex (
            (todo) => {
                return (todo.id == todoId)
            }
        );

        //if we found it on the list
        if (todoIndex !== -1) {
            oldTodos[todoIndex].isComplete = isComplete;
            setTodos(oldTodos);
        }
    }


    return (
        <TodosContext.Provider value={{todos: todos, addTodo:addTodo, updateTodo:updateTodo, deleteTodo:deleteTodo}}> 
            {props.children}
        </TodosContext.Provider>
    )

}