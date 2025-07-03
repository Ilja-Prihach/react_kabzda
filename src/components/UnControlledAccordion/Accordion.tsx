import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;
}

function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("Accordion rendering")

    // const collapsed = true
    const [collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )

}

type AccordionTitlePropsType = {
    title:  string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;