import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import avatar from '../images/avatar.jpeg';
import questBoard from '../images/QuestBoardIcon.png';
import '../style/navbar.css';
import Button from 'react-bootstrap/Button';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className=" navbar" style={{ width: '13%',height:'100vh'}}>
      <Image src={avatar} className='navAvatar' style={{width:'100%'}}roundedCircle />
      <Nav.Link className="navItem" href="/home">
        Quest Board
        <Image src={questBoard} className='navIcon'/>
      </Nav.Link>
      
      <Nav.Link className="navItem" eventKey="link-1">
        Community
        <Image src={questBoard} className='navIcon'/>
      </Nav.Link>
      <Nav.Link className="navItem" eventKey="link-2">
        My Advanture
        <Image src={questBoard} className='navIcon'/>
      </Nav.Link>
      <Nav.Link className="navItem" eventKey="link-3">
        Schedule
        <Image src={questBoard} className='navIcon'/>
      </Nav.Link>
      <Nav.Link className="navItem" eventKey="link-3">
        <Button variant="primary" className='navItem navIcon' style={{}}>Login</Button>{' '}
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals