import { useState, useEffect } from "react";

const pageTitle = document.title;


export default()=>{
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    // if(count>0){
    //   document.title = `${pageTitle}--${count}`;
    // }
    count && (document.title = `${pageTitle}--${count}`) //switch that functions like above if() using less code
  })
  return(
    <button className="outline" onClick={()=> setCount(count+1)}>
      {/* {(()=>{   //standard if/else w/in a component
        if(count === 0){
          return "Click to Support!";
        }
        else{
          return `Supported ${count} times!`
        }
      })()
      } Below is a Ternary statement, works same as above*/}
      {count === 0 ? "Click to support":`Supported ${count} times!`} 
    </button>
  )
}