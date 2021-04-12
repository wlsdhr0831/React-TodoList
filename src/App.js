import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Time from './components/Time';
import MemoList from './components/MemoList';
import MemoCreate from './components/MemoCreate';
import { MemoProvider } from './MemoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background : lightgray;
  }
`;

function App() {
  return (
    <MemoProvider>
        <GlobalStyle/>
        <Time/>
        <MemoCreate/>
        <MemoList/>
    </MemoProvider>
  );
}

export default App;
