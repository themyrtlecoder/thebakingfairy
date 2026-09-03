'use client';

import {Dispatch, ReactNode, createContext, useContext, useEffect, useReducer} from 'react';

type Selection = 'findings' | 'records' | 'field notes'; 

type InitialState = {
    selection: Selection,
    setContext: Dispatch<any>;
}

const initial = {
    selection: 'records'
}

const Provider = createContext<InitialState>({
    ...initial,
    setContext: () => {}
  });

const reducer = (state:any, action:any) => ({
    ...state, ...action
});

const ContextProvider = ({children}:{children:ReactNode}) => {
    const [context, setContext] = useReducer(reducer, initial);

    return (
        <Provider.Provider value={{selection: context.selection, setContext}}>
            {children}
        </Provider.Provider>
    )  
}

const useProvider = () => {
    return useContext(Provider);
}

export {ContextProvider, useProvider};