import React,{createContext,useReducer} from 'react';

let initValue:any;
export const LoginContext = createContext(initValue);

function loginReducer(user:any,action:any){
    switch(action.type){
        case 'ADD_USER':
            return newUser(action.payload.data)
        default : return user;
    }
}
function newUser(data:any){
    return data;
}

export const LoginProvider = (props:any,{initialContacts}:{initialContacts:any}) => {
    const [loginData,dispatch] = useReducer(loginReducer,{email:'',password:""})
    return (
        <LoginContext.Provider value={[loginData,dispatch]}>
            {props.children}
        </LoginContext.Provider>

   
  )
}
