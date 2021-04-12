import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {useTodoDispatch, useTodoNextId} from '../TodoContext';

const CircleButton = styled.div`
    background: lightgray;
    &:hover {
        background: #F6D775;
    }
    &:active{
        background: #FFC200;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
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
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: lightgray;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid darkgray;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid gray;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    
    const onToggle = () => {
        setOpen(!open)
        setValue('');
    };
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });

        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            onChange={onChange}
                            value={value}
                            placeholder="할 일을 입력하세요." />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);