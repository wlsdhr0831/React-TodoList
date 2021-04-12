import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialMemos = [
    {
        id: 1,
        date: '2021년 1월 10일',
        title: '제목입니다.'
    },
    {
        id: 2,
        date: '2021년 1월 10일',
        title: '제목입니다.'
    }
];

function MemoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'REMOVE':
            return state.fillter(memo => memo.id !== action.id);
        default:
            throw new Error(`${action.type}`);
    }
}

const MemoStateContext = createContext();
const MemoDispatchContext = createContext();
const MemoNextIdContext = createContext();

export function MemoProvider({children}){
    const [state, dispatch] = useReducer(MemoReducer, initialMemos);
    const nextMemoId = useRef(2);

    return (
        <MemoStateContext.Provider value={state}>
            <MemoDispatchContext.Provider value={dispatch}>
                <MemoNextIdContext.Provider value={nextMemoId}>
                    {children}
                </MemoNextIdContext.Provider>
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    );
}

export function useMemoState(){
    const context = useContext(MemoStateContext);
    if(!context){
        throw new Error('Cannot Find MemoProvider');
    }
    return context;
}

export function useMemoDispatch(){
    const context = useContext(MemoDispatchContext);
    if(!context){
        throw new Error('Cannot Find MemoProvider');
    }
    return context;
}

export function useMemoNextId(){
    const context = useContext(MemoNextIdContext);
    if(!context){
        throw new Error('Cannot Find MemoProvider');
    }
    return context;
}