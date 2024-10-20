import React from 'react' 
import '../style/questlist.css';
import questImage from '../images/image.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { alignPropType } from 'react-bootstrap/esm/types';

export default function QuestList() {
    return (
      <Card className="box" style={{width: '100%', height: '175px'}}>
        <Card.Body className='body'>
        <div className="imageSection"> 
        <Card.Img variant="top" src={questImage} style={{width:'70%', height: '85%'}}/> 
        </div> 
        <div className="textSection"> 
        <Card.Title className='title'>Looking for Study Buddies</Card.Title> 
          <Card.Text>          
          </Card.Text> 
        </div>
         
        </Card.Body>
       
        
                    
          
      </Card>
    );
  }
  