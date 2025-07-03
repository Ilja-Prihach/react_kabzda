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

    const [valueRating, setValueRating] = useState(3)

    return (
        <div>
            <Star selected={valueRating > 0}/> <button onClick={() => (setValueRating(1))}>1</button>
            <Star selected={valueRating > 1}/> <button onClick={() => (setValueRating(2))}>2</button>
            <Star selected={valueRating > 2}/> <button onClick={() => (setValueRating(3))}>3</button>
            <Star selected={valueRating > 3}/> <button onClick={() => (setValueRating(4))}>4</button>
            <Star selected={valueRating > 4}/> <button onClick={() => (setValueRating(5))}>5</button>
        </div>
    )
}

type SortPropsType = {
    selected: boolean
}

function Star(props: SortPropsType) {
    console.log("Star rendering");
    if (props.selected === true) {
        return (
            <span><b>Star </b> </span>
        )
    }  else {
        return (
            <span>Star </span>
        )
    }
}
export default UnControlledRating;