
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentView from './components/recentView';
import './App.css';

function App() {
  return (<div className='PageContainer'>
    <NavBar/>
    <div className="recentView">
      <h1>Recently Viewed</h1>
      <RecentView/>
    </div>
    </div>
  );
}

export default App;
