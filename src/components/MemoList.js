import React, {useState} from 'react';
import { useMemoState } from '../MemoContext';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import TodoCreate from './TodoCreate';
import TodoDetail from './TodoDetail';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import { TodoProvider } from '../TodoContext';

const MemoListBlock = styled.div`
    display: flex;
`;

const MemoItemBlock = styled.div`
    width: 200px;
    height: 300px;

    position: relative;
    background: white;
    border-radius: 16px;

    display: flex;
    margin: 30px;
`;

const MemoPositionBlock = styled.div`
    position : fixed;
    top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	display: flex;
	align-itmes: center;
	justify-content: center;
`;

const CloseButton = styled.div`
    background: lightGray;
    &:hover {
        background: red;
    }
    &:active{
        background: orange;
    }

    z-index: 5;
    cursor: pointer;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    top: 80px;
    transform: rotate(45deg);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
`;

function MemoList({children}){
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const memos = useMemoState();

    const onClickMemo = e => {
        setId(e.target.id);
        setOpen(true);
    }

    const onClickOutside = e => {
        console.log(e.target)
        setOpen(false);
    }

    return (
        <>
            <MemoListBlock >
                {memos.map(memo => (
                    <MemoItemBlock
                        key={memo.id}
                        id={memo.id}
                        onClick={onClickMemo}
                    >{memo.title} / {memo.id}</MemoItemBlock>
                ))}
            </MemoListBlock>
            {open && 
                <MemoPositionBlock>
                    <TodoProvider>
                        <CloseButton onClick={onClickOutside}>
                            <MdAdd/>
                        </CloseButton>
                        <TodoDetail id={id}>
                            <TodoHead/>
                            <TodoList/>
                            <TodoCreate/>
                        </TodoDetail>
                    </TodoProvider>
                </MemoPositionBlock>
            }
        </>
    );
}

export default MemoList;