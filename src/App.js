import logo from './logo.svg';
import Home from './Home';
import RegisterUser from './Register';
import AuthUser from './Login';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Contact from './Contact';
// import './App.css';

function App() {
  return (
    <div className="App">
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/login" element={<AuthUser/>} />
       <Route  path="/register" element={<RegisterUser/>} />
     </Routes>
   </Router>
    </div>
  );
}

export default App;
