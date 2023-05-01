// class Welcome extends React.Component {  example of how Classes work
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <h1>Meet the {this.props.name}!</h1>
//     )
//   }
// }

// const Welcome = (props) =>{   //example of how Hooks work
//   return (
//     <h1>Meet the <i>{props.name}</i></h1>
//   )
// }

export default (props) =>{   //example of how Components work (as default export)
  return (
    <h1>Meet the <i>{props.name}</i></h1>
  )
};