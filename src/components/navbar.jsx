import React, { Component } from 'react';

class NavBar extends Component {
  
 render() { 
  return ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand" href="#">
   Navbar{" "}
   <span 
   className="badge badge-pill badge-primary">
    <p>There are toal {this.props.totalCounters} counters</p>
   </span> 
   </a>
  </nav> );
 }
}
 
export default NavBar;