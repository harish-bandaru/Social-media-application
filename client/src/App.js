import './App.css';
import Login from './components/Login.js';
import Register  from './components/Register.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <h3>Please Enter LOGIN credentials</h3>
      <Login />
      <h3>Please Enter your information to register</h3>
      <Register />      
    </div>
  );
}

export default App;
