import { useState } from "react";

export default()=>{
  const [count, setCount] = useState(0);
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
      {count ===0? "Click to support":`Supported ${count} times!`} 
    </button>
  )
}