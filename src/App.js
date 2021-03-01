import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <BrowserRouter>
      <Sidebar/>
      <div className="container">
        <Home/>
      
      </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
