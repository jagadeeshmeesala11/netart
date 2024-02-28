import React from 'react'
import cupImage from "../asserts/1.png"
import groupImage  from "../asserts/2.png"
import toolsImage  from "../asserts/3.png"
import Logo from  "../asserts/logo.png"
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import "./home.css"

const Home = () => {
  return (
    <div className='main-container'>

      <div className='first-container'>
        <div className='image-container'>
        <img src={cupImage}  alt="cup" className='cup' />
        </div>

        <div className='text-container'>
            <img src={Logo} alt="logo" className='logo' />
            <h1 className='heading'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
            <ul className='unlist'>
                <li>
                    <p>
    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
</p>
                </li>
                <li>
                    <p > C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
                </li>
            </ul>
       <div className='imageContainer'>
       <img src={groupImage}  alt="group"  className='group'/>
       </div>
        <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>

      </div>
      <div className='para'>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>
      </div>
      <div>
      <img src={toolsImage}  alt="tools" className='tools' />
      </div>
      <div>
        <h3 className='venu'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h3>
      </div>
      <hr className='line' />

      <div className='details-container'>
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>CHEMICALS & PROCESS <span className='span'>|</span>POWER <span className='span'>|</span>WATER & WASTE WATER<span className='span'>|</span> OILS & GAS<span className='span'>|</span> 
        PHARMA<span className='span'>|</span> SUGARS & DISTILLERIES <span className='span'>|</span> PAPER & PULP <span className='span'>|</span>
        MARINE & DEFENCE<span className='span'>|</span> METAL & MINING <span className='span'>|</span>FOOD & BEVERAGE<span className='span'>|</span>
         PETROCHEMICAL & REFINERIES<span className='span'>|</span> SOLAR <span className='span'>|</span>
         BUILDING<span className='span'>|</span> HVAC<span className='span'>|</span> FIRE FIGHTING<span className='span'>|</span> AGRICULTURE & RESIDENTIAL</p>

      </div>

    <div className='contact'>
        <ul className='list'>
            <li className='list-item'><MdOutlinePhone className='phone'/> Toll free 1800 200 1234</li>
            <li className='list-item'><FaFacebook className='phone'/> www.facebook.com/cripumps</li>
            <li className='list-item'><CiGlobe className='phone'/>www.crigroups.com</li>

        </ul>
    </div>

    </div>
  )
}

export default Home
