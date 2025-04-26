import React from 'react'
import Image from '../assets/footer_img.png'

function Footer() {
     return (
       <footer className="max-w-[1200px] m-0 m-auto flex justify-between items-center text-white mt-[100px]">
         <div className="">
         <img className='w-[500px]' src={Image} alt="" />
         </div>
         <div className="">
          <h2 className='text-[#4D4D4D] text-[30px] font-bold'>The unseen of spending three <br /> years at Pixelgrade</h2>
          <p className='w-[500px] text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className='bg-[#4CAF4F] text-white py-[17px] px-[40px] rounded-[5px]'>Learn More</button>
         </div>
       </footer>
     )
   }
   
   export default Footer;   