import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Main from '../main/Main';
import Posts from '../Posts';
import List from '../List';
import User from '../User';
import Login from '../Login';
import NoMatch from '../No';
import ProductDetail from '../card/cardDetail';





function Header() {


  const [user, setUser] = useState(localStorage.getItem("user") ? localStorage.getItem("user") : null);
  const [token, setToken] = useState(localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null);
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    setToken(null);
    navigate('/');
  }

  return (
    <>
      <header className="absolute top-0 left-0 h-[10vh] w-[100vw] text-white flex flex-row justify-between items-center bg-[#3557BD] p-[15px]">
        <div className="ml-[30px]">
          <h4>Logo</h4>
        </div>
        <nav className="flex flex-row gap-[20px] mr-[30px]">
          <Link to="/" className="text-white text-[18px] no-underline">Home</Link>
          <Link to="/posts" className="text-white text-[18px] no-underline">Posts</Link>
          <Link to="/list" className="text-white text-[18px] no-underline">List</Link>
          {user && <Link to="/user" className="text-white text-[18px] no-underline">User</Link>}
          <span className="text-white"> | </span>
          {!user && <Link to="/login" className="text-white text-[18px] no-underline">Login</Link>}
          {user && <span onClick={logOut} className="text-white text-[18px] cursor-pointer">Logout</span>}
        </nav>
      </header>
  

      <Routes> 
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Main user={user} />} />
        <Route path="/posts" element={<Posts />}/>
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login onLogin={setUser} setToken={setToken} user={user} token= {token} />} />
        <Route path="/user" element={<User user={user} token={token} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default Header;
