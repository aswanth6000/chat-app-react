import Login from './components/login/login';
import Signin from './components/signin/signin';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    
    <Router>
    <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/login" exact element={<Login />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
