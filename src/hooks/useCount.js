import { useState } from "react"

export const useCount = ({ stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1){
            setCount(prev => prev -1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    return {
        count,
        decrement,
        increment
    }
}