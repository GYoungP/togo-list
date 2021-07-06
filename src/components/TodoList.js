import React from 'react';
import styled from 'styled-components'
import TodoItem from './TodoItem';

const TodoListBlock = styled.div `
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`
function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="댕댕댕댕" done={true}/>
            <TodoItem text="댕댕댕댕2" done={true}/>
            <TodoItem text="댕댕댕댕3" done={false}/>
            <TodoItem text="댕댕댕댕4" done={true}/>
        </TodoListBlock>
    )
}

export default TodoList;