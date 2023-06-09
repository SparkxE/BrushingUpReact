import "./Nav.css";
import "./Nav.scss";

export default ({cast, onChoice})=>{
  return(
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">cast</summary>
            <ul role="listbox">
              {cast.map(member=>( //within a JSX element, use curly braces for JS, parens for HTML
                <li key={member.id}>
                  <a onClick={()=>{onChoice(member)}} data-tooltip={member.name}>
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img style={{height:'50px'}} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo"></img>
          </a>
        </li>
      </ul>
    </nav>
  )
}