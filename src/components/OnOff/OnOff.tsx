import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props: OnOffPropsType){

    const  onStyle = {
        width: "35px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "#9df506" : "#FFFFFF"
    };
    const  offStyle = {
        width: "35px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.on ? "#FFFFFF" : "#e81212"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "#9df506" : "#e81212"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;