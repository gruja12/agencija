import React, { useEffect, useState } from 'react'
import Logo from '../img/Logo.svg';
import Arrow from '../img/arrow.svg';
import './Navbar.css';

function Navbar() {

    const [showNav,setShowNav] = useState(false);
    const showNavbar = ()=>{
        if (window.scrollY > 80) {
            setShowNav(true);
        }
        else{
            setShowNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',showNavbar)
        return ()=>{
            window.removeEventListener('scroll',showNavbar)
        }

    },[])
  return (
        <div className='logo'>
        <nav className={showNav &&'drop-down'}>
        <div className='logo-img1'><a href='/'><img src={Logo} alt='logo'/></a></div>
          <ul>
            <li><a href='/'>Početna</a></li>
            <li><a href='/'>O nama</a></li>
            <li><a href='/'>Usluge<img src={Arrow} alt='arrow' className='arrow'/></a></li>
            <li><a href='/'>Knjige</a></li>
            <li><a href='/'>Naši Projekti</a></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Kontakt</a></li>
            <button className='btn1'>Besplatan Seminar</button>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar;