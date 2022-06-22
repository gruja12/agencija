import React from 'react';
import './Home.css';
import Img from '../img/img1.png';
import Phone from '../img/phone.svg';
import Email from '../img/email.svg';
import Logo from '../img/Logo.svg';
import Arrow from '../img/arrow.svg';
import './ServicesComponent.css'
import ServicesComponent from './ServicesComponent';
// import Navbar from './Navbar';

function Home() {
  return (
    <div className='container'>
      <div className='img-container'>
      <img src={Img} alt='img' className='img1' width='1920px'/>
      <div className='text'>OVO JE TEST</div>
      <div className='info'> 
      <div className='info1'>Besplatan seminar: “Kako profitirati danas bavljenjem hotelsko-turističkim biznisom”. <span>Prijavite se</span>
      </div> 
      <div className='contact'>
        <div className='phone'><img src={Phone} alt='phone' className='phone-img'/>+387 (0) 64 455 1447</div>
        <div className='email'><img src={Email} alt='email' className='email-img'/>info@agencijakapacitet.com</div>
      </div>
      </div>
      {/* <Navbar/> */}
      <div className='logo'>
        <nav className='drop-down-menu'>
        <div className='logo-img'><a href='/'><img src={Logo} alt='logo'/></a></div>
          <ul>
            <li><a href='/'>Početna</a></li>
            <li><a href='/'>O nama</a></li>
            <li><a href='/'>Usluge<img src={Arrow} alt='arrow' className='arrow'/></a></li>
            <li><a href='/'>Knjige</a></li>
            <li><a href='/'>Naši Projekti</a></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Kontakt</a></li>
            <button className='btn'>Besplatan Seminar</button>
          </ul>
        </nav>
      </div>
      <div className='content'>
        <h2>Konsalting i softverska rješenja za</h2>
        <h1>Vaš smještaj</h1>
        <p>Kapacitet je agencija za menadžment i konsalting u hotelijerstvu koja pruža kompletnu uslugu hotelijerima i vlasnicima smještaja - od <span>savjeta za pokretanje i vođenje turističko-ugostiteljskog posla </span>preko<span> obuke osoblja </span>do <span>softverskih rješenja za rezervacije</span>.</p>
      </div>
      <div className='cta-btn'>
      <button>DOBIJTE PRVI SAVJET BESPLATNO</button>
      </div>
      </div>
      <main>
        <ServicesComponent/>
        <ServicesComponent/>
        <ServicesComponent/>
        <ServicesComponent/>
        

      </main>
</div>

  );
}

export default Home;
