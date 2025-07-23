import React, {useRef, useState} from "react";

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () =>{
    const [value, setValue] = useState("")
    return <><input onChange={(event) => {
       const actualValue = event.currentTarget.value;
       setValue(actualValue);
    }}/> - {value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () =>{
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null);
    return <><input ref={inputRef}/> <button onClick={() => {
        const el =  inputRef.current as HTMLInputElement;
        setValue(el.value)
    }}>save</button> - actual value: {value}</>;
}
