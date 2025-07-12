import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1| 2 | 3 | 4 | 5
}

function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendering");
    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     )
    // }

    const [valueRating, setValueRating] = useState(0)

    return (
        <div>
            <Star selected={valueRating > 0} setValueRating={() => {setValueRating(1)}}/>
            <Star selected={valueRating > 1} setValueRating={() => {setValueRating(2)}}/>
            <Star selected={valueRating > 2} setValueRating={() => {setValueRating(3)}}/>
            <Star selected={valueRating > 3} setValueRating={() => {setValueRating(4)}}/>
            <Star selected={valueRating > 4} setValueRating={() => {setValueRating(5)}}/>
        </div>
    )
}

type SortPropsType = {
    selected: boolean
    setValueRating: () => void
}

function Star(props: SortPropsType) {
    console.log("Star rendering")

    return <span onClick={ () => {props.setValueRating()}}>
        { props.selected ? <b> Star </b> : " Star "}
    </span>
}
export default UnControlledRating;