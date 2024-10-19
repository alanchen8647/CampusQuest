import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import avatar from '../images/avatar.jpeg';
import '../style/navbar.css';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className=" navbar" style={{ width: '15%',height:'100vh'}}>
      <Image src={avatar} className='navAvatar' style={{width:'100%'}}roundedCircle />
      <Nav.Link className="navItem" href="/home">Quest Board</Nav.Link>
      <Nav.Link className="navItem" eventKey="link-1">Community</Nav.Link>
      <Nav.Link className="navItem" eventKey="link-2">My Advanture</Nav.Link>
      <Nav.Link className="navItem" eventKey="link-3">Schedule</Nav.Link>
    </Nav>
  );
}

export default StackedExample;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals