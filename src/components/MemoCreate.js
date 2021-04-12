import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoDetail from './TodoDetail';

const MemoHeadBlock = styled.div`
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

const MemoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;
const MemoCreateBlock = styled.div`
    background: darkgray;
    &:hover {
        background: #F6D775;
    }
    &:active{
        background: #FFC200;
    }

    cursor: pointer;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: fixed;
    bottom : 35px;
    right: 35px;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;

    transition: 0.125s all ease-in;
    ${props =>
        props.open &&
        css`
            background: gray;
            &:hover{
                background: yellow;
            }
            &:active{
                background: orange;
            }
            transform: rotate(45deg);
        `
    }
`;

function MemoCreate(){
    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);

    return (
        <> 
            <MemoCreateBlock onClick={onToggle} open={open}>
                    <MdAdd/>
            </MemoCreateBlock>
            {open && 
                <TodoDetail>
                <MemoHeadBlock>메모 제목을 입력하세요</MemoHeadBlock>
                <MemoListBlock>할 일을 입력하세요</MemoListBlock>
                </TodoDetail>
            }
        </>
    )
}

export default MemoCreate;