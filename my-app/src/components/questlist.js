import React from 'react' 
import '../style/questlist.css';
import Card from 'react-bootstrap/Card';

export default function QuestList() {
    return (
      <Card style={{width: '100%', height: '175px' }}>
        <Card.Body>
          <Card.Title>Looking for companions for a museum trip to Metropolis on 10/12 2:00PM!</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
    );
  }
  