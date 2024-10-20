
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentView from './components/recentView.js';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <Container fluid style={{padding:"0"}}>
    <Row style={{padding:'0'}}>
      <Col xs={2}><NavBar /></Col>
      <Col xs={6}>
        <h1>Recently Viewed</h1>
        <RecentView/>
      </Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  
  
  
  
  // <div className='PageContainer'>
  //   <NavBar/>
  //   <div className="main">
  //     <h1>Recently Viewed</h1>
  //     <RecentView/> 
  //   </div>
  //   </div>
  );
}

export default App;
