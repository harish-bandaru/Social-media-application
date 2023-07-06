import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';
import Loginform from './components/pages/Login.js';
import Registerform  from './components/pages/Register.js';
import Profile from './components/pages/Profile.js';
import Navigation from './components/pages/Nav.js';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index />
          <Route path="/login" element={<Loginform />}/>
          <Route path="/register" element={<Registerform />}/>
          <Route path="/profile" element={<Profile />}/>
          </Route>
        </Routes> 
      </BrowserRouter>  
      </UserProvider>   
    </div>
  );
}
export default App;
