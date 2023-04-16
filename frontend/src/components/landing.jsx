import React from 'react'
import Typed from 'react-typed';
import Navbar from './navbar'
import humanity from '../assets/14.png'
import main2 from '../assets/humanity.jpg'
import {
    FaDribbbleSquare,
    FaFacebook,
    FaGithubSquare,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
    const navigate = useNavigate()

    const navigatetoregister = () => {
        navigate('/register')
    }
    const navigatetoupload = () => {
        navigate('/startfundraiser')
    }
    return (

        <div className='text-white'>
            <div><Navbar /></div>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center bg-[url("https://example.com/image.jpg")] bg-cover bg-center'>

                <p className='text-[#f6acac] font-extrabold p-2'>WELCOME TO <em>AASHA</em></p>
                <h1 className='md:text-6xl sm:text-4xl text-4xl font-bold md:py-6'>We rise by helping People.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>₹ 1 can save someone's  </p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-yellow-500'
                        strings={["LIFE"]} typeSpeed={120} backspeed={140} loop />
                </div>
                <div   >
                    <p className='md:text-2xl text-xl font-bold text-gray-500  '>Join our Community</p>
                    <button className=' bg-[#f6acac] w-[200px] rounded-3xl  text-xl my-6 text-black  mr-6 py-3' onClick={navigatetoregister}>Donate Now</button>
                    <button className=' bg-[#00df9a] w-[200px] rounded-3xl  text-xl my-6 text-black  mr-6 py-3' onClick={navigatetoupload}>Start a fundraiser</button>
                </div>
            </div>
            <div
                className='w-full bg-white  '>
                <div className='  grid   grid-cols-1 sm:grid-cols-2 '>
                    <div className='sm:py-4 sm:px-12 mx-auto sm:mt-[150px]  '>
                        <img className=' ' src={humanity} alt="/" /></div>

                    <div className='w-full py-20  px-5 '>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold  text-center sm:p-10  sm:mt-10 md:p-2 md:mt-5 text-black '><Typed strings={["Who are we?"]} typeSpeed={120} backspeed={140} loop /></h1>


                        <p className='md:text-2xl   text-white-200 py-3 text-black  sm:p-20 sm:mt-10 md:p-3 md:mt-3 text-center   '> We are a community of passionate individuals who believe that together, we can make a positive impact on the world. We come from all walks of life, united by a common goal - to create a better future for ourselves and future generations.

                            Our mission is to make a difference by supporting causes that matter. Whether it's fighting for social justice, promoting education and literacy, supporting healthcare initiatives, or protecting the environment, we are committed to creating lasting change.

                            Through our fundraising efforts, we aim to raise awareness, mobilize resources, and inspire others to join us in making a difference. Together, we can create a brighter future for all.</p></div>


                </div>
            </div>
            <div className='max-w-[1240px]  h-[100vh] sm:h-[60vh] grid grid-cols-1 sm:grid-cols-2 bg-black  md:h-[60vh]    '>
                <div className=' md:mt-[210px]  ' >
                <div className=' text-center p-5 text-3xl  font-bold  sm:text-xl '><Typed strings={["The Beauty in Helping Others"]} typeSpeed={120} backspeed={140} loop /></div>
                <p className='text-center   text-2xl sm:text-xl   '>Did you know that one of the things that you must always take into consideration is the necessity to offer your help and support to others? Once you do this, you will start to live a fulfilling life to the point that you will feel happier than ever. Indeed, there are tons of benefits when you make an effort to reach out to people who need your support.</p></div>
                <img className='md:ml-[800px] md:mt-[60px] h-[50vh] w-[100%]' src={main2} /></div>
             
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3  text-2xl  gap-3 bg-white text-black p-8  mt-11 ">
                <div className='border border-orange-500 rounded-3xl p-2'>
                    <div className=' col-span-1 text-center mt-[20px] font-bold underline md:underline-offset-4 '>Give Hope For Free</div>

                    <p className=' p-5 text-center text-xl  bg-white text-black'>Are you aware that many people are no longer interested in living their lives because of the hardships that they are going through? These are the individuals who have reached their limits in dealing with the struggles that they encounter. Fortunately, there is a way to change how they feel, and that is to extend your help to them. With one word or action, you can already give them hope. Once this happens, they will become more motivated to continue living their lives. In a way, you are trying to keep them away from hurting themselves.</p></div>
                <div className='border border-orange-500 rounded-3xl p-2'>
                    <div className=' col-span-1 text-center mt-[20px] font-bold underline md:underline-offset-4 bg-white' >It Gives You Purpose</div>
                    <p className='p-5 text-center text-xl  bg-white text-black'>There are times in your life when you may also feel lost and discouraged because of your personal problems. Oftentimes, you may end up realizing that you no longer have an idea of how to live your life. An excellent way to change how you feel is to help other people. When you do this right, you will begin to see that you have a deeper and more meaningful purpose in this life. As a result, you will also find more reasons to continue living your life to the fullest. You are helping yourself to become more interested to get on with your days</p>
                </div>
                <div  className='border border-orange-500 rounded-3xl p-2'>
                    <div className=' col-span-1 text-center mt-[20px] font-bold underline md:underline-offset-4   bg-white'>Inspire One Another</div>
                    <p className='p-5 text-center text-xl  bg-white text-black'>Another beauty of helping other people is that you can start to develop or create a culture of kindness around the community. Take note that the persons who receive your help or support will also be inspired to do the same thing to other individuals. If you show others that they have to help without expecting in return, there is a high tendency that they will also work hard to give back to others. Because of this, you should continue to show consistency in extending your helping hands to the right people.</p></div>
            </div>
            <div className=' bg-black  ' >
                    <div className='grid grid-cols-1 2xl:h-[50vh] sm:h-[80vh] lg:h-[60vh] md:h-[70vh] bg-black mt-[30px] mx-[50px] border border-whitespace-pre-line rounded-3xl mb-[20px]'>
                        
                        < div className=' text-center  text-3xl  sm:mt-[190px] 'id='about'><div className='sm:mt-[-110px] mt-[-10px] py-8 text-5xl underline'><Typed strings={["About Us"]} typeSpeed={120} backspeed={140} loop /></div>We are here to help the people who are in need of fund for their expensive treatment which they could not afford. So we are connecting the people who wants to help the people by donating a very small amout of their money to the people who need it the most. Donation is not about donating a large amount of money. If a person helps another person to collect atleast Rs. 1 that is also called as donation.</div>

                    </div>
            </div>
            <footer className='bg-gray-900 text-gray-400'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div>
          <p className='text-gray-400'>&copy; 2023 AASHA. All rights reserved.</p>
        </div>
        <div className='flex justify-center space-x-4'>
          <a href='#' className='hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-white'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-white'>
            Contact Us
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white'>
            <FaFacebook />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white'>
            <FaInstagram />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white'>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>


        </div>



    )
} 