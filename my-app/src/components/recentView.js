import React from 'react' 
import Card from 'react-bootstrap/Card'; 
import quest from '../images/quest.jpg';

export default function RecentView() { 
    return ( 
        <Card style={{ width: '20%' }}> 
        <Card.Img variant="top" src={quest} style={{width:'100%'}}/> 
        <Card.Body class='p-0'> 
            <Card.Title class='text-center'>Looking for Study Buddies</Card.Title> 
            <Card.Text> 
                <div class="d-inline-flex p-3 w-100">
                    <div>
                        By Alan Chen 
                        <br></br>
                        Posted 30 min ago 
                    </div>
                    <div>
                        1/5
                    </div>
                </div> 
            </Card.Text> 
        </Card.Body> 
        </Card> 
    ) 
}