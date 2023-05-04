import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";
import Welcome from './components/Welcome';
import Support from './components/Support';


function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null); //useState with an initial null value

  async function fetchCast(){
    const response = await fetch('cast.json');
    setCast(await response.json());
  }
  useEffect(()=>{
    fetchCast();
  });

  return (
    <>
      <Nav cast={cast} onChoice={(info)=>{setMemberInfo(info)}}></Nav>
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="Stargazers Group" />
          <Welcome name="Stargazers"></Welcome>
          {/* <h1>Meet the <i style={{color:"steelblue"}}>{name}</i></h1> */}
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={(info)=>{setMemberInfo(info)}}></ListCast>
          {memberInfo && <Modals member={memberInfo} handleClose={()=>{setMemberInfo(null)}} handleChange={(info)=>{setMemberInfo(cast[info])}} castCount={cast.length}></Modals>}
          <Support></Support>
          {/* <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} /> */}
        </hgroup>
      </div>
    </>
  )
}
export default App
