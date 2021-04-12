import React from 'react';
import styled from 'styled-components';


const DateStyle = styled.div`
	font-size: 2rem;
	font-weight: 900;
	text-align: center;
    margin: 30px;
`;

function Time(){
    const today = new Date();

    return (
        <DateStyle>{today.toDateString()}</DateStyle>
    )
}

export default Time;