import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import LoginForm from './pages/login/LoginForm';
import ThankYou from './pages/thankyou/ThankYou';
import Ballot from './pages/ballot/Ballot';
import RegistrationForm from './pages/registration/RegistrationForm';
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home/>}/>
        {/* <Route exact path="/login" element={<LoginForm/>}/> */}
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/ballot" element={<Ballot/>}/>
        <Route path="/registration" element={<RegistrationForm/>}/>
        <Route path="/admin" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
