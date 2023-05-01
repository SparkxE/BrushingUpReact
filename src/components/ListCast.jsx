import { useState, useEffect } from "react"

export default ()=>{
  const [cast, setCast] = useState([]);

  async function fetchCast(){
    const response = await fetch('cast.json');
    setCast(await response.json());
  }
  useEffect(()=>{
    fetchCast();
  });

  return(
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {cast.map(member => (
        <a key={member.id} data-tooltip={member.name}> {/*data-tooltip is a pico.css element that allows easy hover-text*/}
          <img src={`images/${member.slug}_tn.svg`} alt={member.name}></img>
        </a>
      ))}
    </div>
  )
}

// export default ({ cast, onChoice }) => {
//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
//       gap: `1rem`,
//       marginBottom: '1rem'
//     }}>
//       {
//         cast.map(member => (
//           <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
//             <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
//           </a>
//         ))
//       }
//     </div>
//   )
// }