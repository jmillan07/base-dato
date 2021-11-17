import { useState } from "react";

const useInput =(initialvaluer="")=>{
    const [input, setInput] = useState(initialvaluer)

    const handleChange =(e)=>{
        setInput(e.target.value)
    }
    return [input,setInput]
}

export default useInput;