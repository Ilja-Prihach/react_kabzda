import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import  Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


function App() {
  return (
      <div>
          <PageTitle title={"This is App component"}/>
          {/*<PageTitle title={"My Friends"}/>*/}
          Article 1
          <Rating value={3}/>
          <Accordion titleValue={"Menu"} collapsed={true}/>
          <Accordion titleValue={"Users"} collapsed={false}/>
          {/*Article 2*/}
          {/*<Rating value={4}/>*/}
          <OnOff on={true}/>
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
