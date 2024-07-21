import React from 'react'
import Accordian from './Accordian'
import data from "./data.json"

console.log(data);

const Faqs = () => {

    
  return (
    <div>
      <h1>FAQs</h1>
      {data.faqs.map((obj,index)=>{
        return <Accordian qna ={obj} key={index} />
      })}
      
    </div>
  )
}

export default Faqs
