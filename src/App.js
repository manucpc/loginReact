import './App.css';
import validateall from "./validation"; 
function App() {
  return (
    <div>
      <form>
        <h1>Login</h1><br></br>
        
        <label>Username:</label>
        <input id="username" type="text" required></input><br></br>
        
        <label>Password:</label>
        <input id="password" type="text" required></input><br></br>
        
        <label>Confirm password:</label>&nbsp;&nbsp;
        <input id="confirmPassword" type="text" required></input><br></br>
        
        <button onClick={validateall}>Login</button>
      </form>
    </div>
  );
}
export default App;
