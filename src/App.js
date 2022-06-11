import './App.css';
import Homepage from './pages/Homepage';
import UserInfo from './pages/UserInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/user/:id" element={<UserInfo/>}/>
          <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
