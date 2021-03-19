import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./constants";

export const increment = () => {
    return { 
        type: INCREMENT_COUNTER
    }
}

export const decrement = () => { 
    return {
        type: DECREMENT_COUNTER
    }
}