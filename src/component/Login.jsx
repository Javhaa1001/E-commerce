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
      <div className='flex flex-col w-[250px] h-[300px] justify-center items-center border-2 border-blue-600 rounded-[8px]'>
        <br/>
        <span className='mt-[-20px]'>Username:</span><br/>
        <input
          type="text"
          onChange={(e) => setCreds({...creds, username: e.target.value})}
          className="border-2 border-gray-400 w-[180px] rounded-[10px] p-[5px] mt-[-16px]"/><br/>
        <span>Password:</span><br/>
        <input
          type="password"
        onChange={(e) => setCreds({...creds, password: e.target.value})}
        className="border-2 border-gray-400 w-[180px] rounded-[10px] p-[5px] mt-[-16px]"/><br/><br/>
        <button 
        className="bg-[#3557BD] text-white p-[5px_22px] border-[1px] rounded-[5px] mt-[-16px]" onClick={handleLogin}> Login</button>
      </div>
    </div>
  );
}

export default Login;