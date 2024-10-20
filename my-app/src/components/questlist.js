import React from 'react' 
import '../style/questlist.css';
import questImage from '../images/image.jpg';
import Card from 'react-bootstrap/Card';

export default function QuestList() {
    return (
      <Card className="box" style={{width: '100%', height: '175px'}}>
        <Card.Body className='row'>
        <div className='col-3'> 
        <Card.Img variant="top" src={questImage} style={{width:'18%', height: '70%'}}/> 
        </div>
        <div className='col-9'> 
        Some text
        </div>

         
        </Card.Body>
      </Card>
    );
  }
  