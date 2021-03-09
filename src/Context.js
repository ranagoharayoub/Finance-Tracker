import { createContext,useContext,useReducer } from "react";



export const transaction = createContext()



export const Provider = ({reducer, initialState, children}) =>(
<transaction.Provider  value = {useReducer(reducer, initialState)}>
    {children}
</transaction.Provider>
)

export const UseStateValue = () => useContext(transaction)



