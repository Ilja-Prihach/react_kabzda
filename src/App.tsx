import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UncontrolledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";
import UncontrolledOnOf from "./components/UncontrolledOnOf/UncontrolledOnOf";


function App() {

  //   Local state from Rating
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
      <div className={"App"}>
          <PageTitle title={"This is App component"}/>
          Article 1
          <UnControlledRating/>
          <UnControlledAccordion titleValue={"Menu"} />
          <UnControlledAccordion titleValue={"Users"}/>
          <Rating value={ratingValue} onClick={setRatingValue}/>
          <OnOff on={switchOn} onChange={setSwitchOn}/>
          {/*<Accordion titleValue={"UsersControlled"}*/}
          {/*           collapsed={accordionCollapsed}*/}
          {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}  />*/}

          <UncontrolledOnOf onChange={setSwitchOn}/> {switchOn.toString()}
      </div>

  )
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle rendering");
  return <h1>{ props.title }</h1>
}





export default App;
