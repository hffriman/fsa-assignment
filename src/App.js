import './App.css';
import Homepage from './pages/Homepage';
import ShowUser from './pages/ShowOneUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/user/:id" element={<ShowUser/>}/>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
