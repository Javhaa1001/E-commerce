import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ onLogin, setToken, user, token }) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        phone: creds.username,
        password: creds.password,
      });

      console.log(response.data);
      
      if (response.data.error) {
        alert("Нэвтрэх нэр эсвэл нууц үг буруу байна!");
        return;
      }

      if (response.data.token) {
        onLogin && onLogin({ username: creds.username });
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("user",  creds.username)
        setToken && setToken(localStorage.getItem("accessToken"));
        if(user && token){
          navigate("/stats");
        }
      }
    } catch (error) {
      console.error("Нэвтрэх үед алдаа гарлаа:", error);
      alert("Нэвтрэх амжилтгүй. Дахин оролдоно уу!");
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signUp", {
        phone: creds.username,
        password: creds.password,
      });
      
      console.log("Бүртгэл амжилттай:", response.data);
      alert("Бүртгэл амжилттай! Одоо нэвтэрч орно уу.");
    } catch (error) {
      console.error("Бүртгүүлэх үед алдаа гарлаа:", error);
      alert("Бүртгэл амжилтгүй. Дахин оролдоно уу!");
    }
  };

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
        className="bg-[#3557BD] text-white p-[5px_22px] border-[1px] rounded-[5px] mt-[-16px]" onClick={handleLogin}> 
        Login
        </button>
        <button 
        className="bg-[#3557BD] text-white p-[5px_22px] border-[1px] rounded-[5px] mt-[10px]" onClick={handleSignUp}> 
        Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
