import styled, {css} from 'styled-components';

export const CircleButton = styled.div`
    background: green;
    &:hover {
        background: yellow;
    }
    &:active{
        background: orange;
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

export const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;