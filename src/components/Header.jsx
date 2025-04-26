import React from 'react'
import logo from '../assets/nexcent.png'

const Header = () => {
  return (
    <div className='bg-[#f1f1f1] max-w-[1200px] m-0 m-auto'>
     <header>
          <nav className='flex justify-between items-center bg-white'>
               <img src={logo} alt="" />
               <ul className='flex gap-4 justify-around items-center'>   
                    <li><a className='text-[#4D4D4D] ' href="#">Home</a></li>
                    <li><a className='text-[#4D4D4D] ' href="#">Features</a></li>
                    <li><a className='text-[#4D4D4D] ' href="#">Community</a></li>
                    <li><a className='text-[#4D4D4D] ' href="#">Blog</a></li>
                    <li><a className='text-[#4D4D4D] ' href="#">Pricing</a></li>
                    <button className='bg-[#4CAF4F] text-white py-[17px] px-[40px] rounded-[5px]'>Register Now</button>
               </ul>
          </nav>
     </header>
    </div>
  )
}

export default Header