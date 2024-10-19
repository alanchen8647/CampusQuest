
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import avatar from '../images/avatar.jpeg';
import '../style/navbar.css';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" style={{ width: '15%',textAlign:'center'}}>
      <Image src={avatar} style={{width:'100%'}}roundedCircle />
      <Nav.Link href="/home">Quest Board</Nav.Link>
      <Nav.Link eventKey="link-1">Community</Nav.Link>
      <Nav.Link eventKey="link-2">My Advanture</Nav.Link>
      <Nav.Link eventKey="link-3">Schedule</Nav.Link>
    </Nav>
  );
}

export default StackedExample;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals