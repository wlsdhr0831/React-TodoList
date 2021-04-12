import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;

    border-bottom: 1px solid black;

    h1{
        margin: 0;
        font-size: 36px;
        color: red;
    }
    
    .day{
        margin-top: 4px;
        color: blue;
        font-size: 21px;
    }

    .task-left{
        color: green;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="task-left">할 일 {undoneTasks.length} 개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;