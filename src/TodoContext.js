import React, { useReducer, createContext } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '댕댕댕댕',
        done: true,
    },
    {
        id: 2,
        text: '동동동동',
        done: true,
    },
    {
        id: 3,
        text: '둥둥둥둥',
        done: false,
    },
    {
        id: 4,
        text: '똥똥똥똥',
        done: false,
    }
];
/* 
    CREATE
    TOGGLE
    REMOVE
 */
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}