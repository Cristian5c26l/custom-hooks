import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {
    const [counter, setstate] = useState(initialState);//initialstate vale 10 si no se manda desde useState
    
    const increment = ( ) => {
        setstate( counter + 1 );
    }

    const decrement = ( ) => {
        setstate( counter - 1 );
    }

    const reset = () => {
        setstate( initialState );
    }

    return {//retorna un objeto
        counter,//counter: counter
        increment,
        decrement,
        reset
    }

};
