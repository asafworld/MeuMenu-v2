import React from 'react';
import MenuForm from '../../Components/MenuForm/MenuForm';
import MenuList from '../../Components/MenuList/MenuList';
import logo from '../../Images/forksAndKnifes.png';
import './Home.css'

function Home() {
  
  
  return(
    <article className='home-page-article'>
      <div className='home-page-header'>
        <h1>Meu Menu</h1>
        <img
          src={ logo }
          alt="forks and knifes"
          className="home-logo"
        />
      </div>
      <div className='home-page-sections'>
        <MenuForm />
        <MenuList />
      </div>
    </article>
  )
}

export default Home;