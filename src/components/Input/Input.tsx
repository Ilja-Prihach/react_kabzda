import React, {ChangeEvent, useRef, useState} from "react";

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return(
        <input value={parentValue} onChange={onChange}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return(
        <input type="checkbox" checked={parentValue}  onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return(
        <select value={parentValue} onChange={onChange}>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    )
}