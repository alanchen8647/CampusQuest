import React from 'react' 
import Card from 'react-bootstrap/Card'; 
import quest from '../images/quest.jpg';
import '../style/recentView.css';

export default function RecentView() { 
    return ( 
        <>
        <Card style={{ width: '15%', height: '300px'}}> 
        <Card.Img variant="top" src={quest} style={{width:'100%', height: '70%'}}/> 
        <Card.Body className='body'> 
            <Card.Title className='title'>Looking for Study Buddies</Card.Title> 
            <Card.Text> 
                <div className="container">
                    <div className='author'>
                        By Alan Chen 
                        <br/>
                        Posted 30 min ago
                    </div>
                    <div className='size'>
                        1/5
                    </div>
                </div>
            </Card.Text> 
        </Card.Body> 
        </Card>

        <Card style={{ width: '15%', height: '300px'}}> 
        <Card.Img variant="top" src={quest} style={{width:'100%', height: '70%'}}/> 
        <Card.Body className='body'> 
            <Card.Title className='title'>Looking for Study Buddies</Card.Title> 
            <Card.Text> 
                <div className="container">
                    <div className='author'>
                        By Alan Chen 
                        <br/>
                        Posted 30 min ago
                    </div>
                    <div className='size'>
                        1/5
                    </div>
                </div>
            </Card.Text> 
        </Card.Body> 
        </Card>

        <Card style={{ width: '15%', height: '300px'}}> 
        <Card.Img variant="top" src={quest} style={{width:'100%', height: '70%'}}/> 
        <Card.Body className='body'> 
            <Card.Title className='title'>Looking for Study Buddies</Card.Title> 
            <Card.Text> 
                <div className="container">
                    <div className='author'>
                        By Alan Chen 
                        <br/>
                        Posted 30 min ago
                    </div>
                    <div className='size'>
                        1/5
                    </div>
                </div>
            </Card.Text> 
        </Card.Body> 
        </Card>
        </>
    ) 
}