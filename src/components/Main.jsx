import React from 'react'
import Image from '../assets/main_img.png'
import logos from '../assets/logos.png'
import icon_left from '../assets/icon_l.png'
import icon_center from '../assets/icon_center.png'
import icon_right from '../assets/icon_right.png'

function Footer() {
     return (
       <main className="">
          <div className="flex justify-between items-center bg-[#F5F7FA] w-[100%] h-[100vh] ">
               <div className="max-w-[1200px] w-[100%] m-0 m-auto">
                    <div className="absolute">
                         <h1 className="text-[#4D4D4D] text-[50px] font-bold leading-[50px] mb-[15px]">Lessons and insights <br /> <span className="text-[#4CAF4F]">from 8 years</span></h1>
                         <p className="text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
                         <button className="text-white bg-[#4CAF4F] py-[17px] px-[40px] mt-[15px] rounded-[5px]">Register</button>
                    </div>
                    <div className="flex justify-end items-end">
                         <img className='' src={Image} alt="" />
                    </div>
               </div>
          </div>

          <h2 className='text-center text-[#4D4D4D] text-4xl font-bold'>Our Clients</h2>
          <p className='text-center text-[#717171] font-bold'>We have been working with some Fortune 500+ clients</p>
          <img className='ml-[300px] w-[900px]' src={logos} alt="" />
          <h2 className='text-center text-[#4D4D4D] text-4xl font-bold mt-[50px]'>Manage your entire community <br /> in a single system</h2>

          <div className="flex justify-evenly items-center">
               <div className="text-center flex flex-col justify-center items-center mt-[50px] shadow-2xl rounded-2xl p-[20px]">
                    <img className='w-[100px] h-[100px]' src={icon_l} alt="" />
                    <h2 className='text-[#4D4D4D] text-2xl font-bold m-[10px]'>Membership <br /> Organisations</h2>
                    <p className='text-[#717171]'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
               </div>
               <div className="text-center flex flex-col justify-center items-center mt-[50px] shadow-2xl rounded-2xl p-[20px]">
                    <img className='w-[100px] h-[100px]' src={icon_center} alt="" />
                    <h2 className='text-[#4D4D4D] text-2xl font-bold m-[10px]'>National <br /> Associations</h2>
                    <p className='text-[#717171]'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
               </div>
               <div className="text-center flex flex-col justify-center items-center mt-[50px] shadow-2xl rounded-2xl p-[20px]">
                    <img className='w-[100px] h-[100px]' src={icon_right} alt="" />
                    <h2 className='text-[#4D4D4D] text-2xl font-bold m-[10px]'>Clubs And <br /> Groups</h2>
                    <p className='text-[#717171]'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
               </div>
          </div>

       </main>
     )
   }
   
   export default Footer;   