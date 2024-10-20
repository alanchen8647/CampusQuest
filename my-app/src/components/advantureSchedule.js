import React from 'react';
import '../style/schedule.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Hello(){
    console.log("HelloWorld");
}

function AdvantureSchedule() {
  return (
    <Container fluid className="schedule" >
        <h4 className='ScheduleTitle'>Advanture Schedule</h4>
        <Card className="scheduleBody">
            <Card.Header>Upcoming Quest</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item onClick={Hello} style={{cursor: "pointer" }}>
                            <Card.Title className='Describe'>Hangout on Museum</Card.Title>
                            <Card.Subtitle>1000 5th Ave, New York, NY 10028</Card.Subtitle>
                            <Card.Text>Time: 10/19/2025 2:00PM</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                            <Card.Title className='Describe'>Hangout on Museum</Card.Title>
                            <Card.Subtitle>1000 5th Ave, New York, NY 10028</Card.Subtitle>
                            <Card.Text>Time: 10/19/2025 2:00PM</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                            <Card.Title className='Describe'>Hangout on Museum</Card.Title>
                            <Card.Subtitle>1000 5th Ave, New York, NY 10028</Card.Subtitle>
                            <Card.Text>Time: 10/19/2025 2:00PM</Card.Text>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Container>
  );
}

export default AdvantureSchedule;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals