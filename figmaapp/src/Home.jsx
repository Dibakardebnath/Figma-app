import React from 'react'
import './Home.css'
import navbar from './Images/navbar.png'
import madeira from './Images/madeira.png'
import group13 from './Images/Group 13.svg'
import image19 from './Images/image 19.png'
import redLine from './Images/redLine.png'
import textLine from './Images/textLine.png'
import group12 from './Images/Group 12.png'
import why from './Images/why-img.png'









const Home = () => {
  return (
    <div className='main-container'>
         
         <div className='nav-container'>
         <img className='nav-img' src={navbar} alt="" />

         </div>
         <div className='madeira-container'>
            <img className='madeira-img' src={madeira} alt="" />
         </div>

         <div className='group3'>
            <img width={'100%'} className='grp3-img' src={group13} alt=''/>
            <img className='maskgroup-img' src='https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png' alt="" />
         </div>
       
       <div className='girlImg-main-container'>
        <div className='girl-img'><img width={'100%'} src={image19} alt="" /></div>
        <div className='girl-second-container'>
          <img width={'100%'} src={redLine} alt="" />
          <img width={'100%'} src={textLine} alt="" />
          <img className='girl-container-button' width={'50%'} src={group12} alt="" />
        </div>
       </div>

       <div className='why-container'>
        <img width={'100%'} src={why} alt="" />
       </div>
      
    </div>
  )
}

export default Home
