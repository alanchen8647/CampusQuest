import React from 'react';
import '../style/questlist.css';
import questImage from '../images/image.jpg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function QuestList() {
    return (
        <Card className='container' style={{width: '98%'}}>
            <Row className='row' >
                <Col md={4}>
                    <Card.Img  className="card-img" src={questImage} style={{width: '60%'}} alt="Quest" />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>Looking for companions for a museum trip to Metropolis on 10/12 2:00PM!</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>        
    );
}