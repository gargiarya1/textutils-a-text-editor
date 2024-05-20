import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function NavBar(props) {
  return (
  <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.Title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.About}</Link>
        </li>
      </ul>
       {/* <form className="d-flex mx-4">
        <input className="form-control me-2 " type="input" placeholder="enter color to change backgroung" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Enter</button> 
      </form>  */}
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" onClick={props.toggleMod} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"enable darkMode":"disable darkMode"}</label>
      </div>
    </div>
  </div>
  
</nav>
  </div>
  )
}

NavBar.propTypes = {
    Title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}

NavBar.defaultProps = {
  Title: "TextEditor",
  About: "About"

}

