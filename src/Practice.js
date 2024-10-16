import React,{useState} from 'react';

const Practice = () => {

    const [inputValue,setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    console.log(inputValue);

    return <input type="text" onChange={handleInputChange} value={inputValue}/>
}

export default Practice;