import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

 function OnOff(props: OnOffPropsType){

    // let on = false

    let [on, setOn] = useState(false)

    const  onStyle = {
        width: "35px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "#9df506" : "#FFFFFF"
    };
    const  offStyle = {
        width: "35px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "#FFFFFF" : "#e81212"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "#9df506" : "#e81212"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;