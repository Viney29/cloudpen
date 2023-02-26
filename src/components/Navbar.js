import React,{useEffect}  from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);
  },[location]);
  return (
      <header className='header'>
          <nav className='nav'>
            <Link key="0" className={`navlink ${location.pathname ==='/' ? 'isActive': ''}`} to="/">Home</Link>
            <Link key="1" className={`navlink ${location.pathname ==='/about' ? 'isActive': ''}`} to="/about">About</Link>
          </nav>
      </header>
  )
}

export default Navbar
