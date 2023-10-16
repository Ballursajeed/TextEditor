import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

	
  return(
 
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand " href="/" >{props.title}</a>
  <div className={`form-check form-switch text-${props.mode==="light"? 'dark':"light"}`} >
  <input className="form-check-input " type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled {props.mode} Mode</label>
</div>

  </div>
</nav>
  );

}
Navbar.propTypes={title:PropTypes.string,
                       search:PropTypes.string}
  Navbar.defaultProps={title:"set title here",
                       search:"Search here"}                     