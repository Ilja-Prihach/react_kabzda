import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import  Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/Accordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";


function App() {
  return (
      <div>
          <PageTitle title={"This is App component"}/>
          {/*<PageTitle title={"My Friends"}/>*/}
          Article 1
          <UnControlledRating/>
          <UnControlledAccordion titleValue={"Menu"} />
          <UnControlledAccordion titleValue={"Users"}/>
          {/*Article 2*/}
          {/*<Rating value={4}/>*/}
          <OnOff/>
          <OnOff/>
          <OnOff/>
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
