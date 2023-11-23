import './App.css';
import axios from "axios";
import Login from './Pages/Login';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
