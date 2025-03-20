import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login({ onLogin }) {
    const [creds, setCreds] = useState({});
    const navigate = useNavigate();
  
    function handleLogin() {
      if(creds.username === 'admin' && creds.password === '123') {
        onLogin && onLogin({username: creds.username});
        navigate('/stats');
      }
    }
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <br/>
        <span>Username:</span><br/>
        <input
          type="text"
          onChange={(e) => setCreds({...creds, username: e.target.value})}/><br/>
        <span>Password:</span><br/>
        <input
          type="password"
        onChange={(e) => setCreds({...creds, password: e.target.value})}/><br/><br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;