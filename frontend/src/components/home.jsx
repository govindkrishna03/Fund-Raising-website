import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';




function Home(){
  const[cards, setCards] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('token')===null){
      window.location.href = '/login'
    }
    else{
    fetch('http://127.0.0.1:8000/posting/')
    .then(response => response.json())
    .then(data => setCards(data));
    };
  }, []);

  const navigate = useNavigate()
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);}

  const navigatetodonate=()=>{
    navigate('/makepayment')
  }

  return (
    <div className='main'>
      
     
      <div><div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#ffffff]'><Link to='/'>AASHA</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/">About</Link></li>
        <li className='p-4'><Link to="/home">Donate</Link></li>
        <li className='p-4'><Link to='/logout' >Logout</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>AASHA</h1>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'>About</li>
        <li className='p-4'><Link to="/home">Donate</Link></li>
        <li className='p-4'><Link to='/'>Logout</Link></li>
      </ul>
    </div></div>
      <div className='w-full py-[10rem]  px-4 bg-white '>
      <div className='max-w-[1240px]  mx-auto gap-8 grid md:grid-cols-3 '>
            {cards.map((card) => (
             <div className='w-full shadow-2xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300  bg-white' >
                {card.image ? (
                  <img className='  py-10'src={`http://127.0.0.1:8000${card.image}`} alt={card.name} />
                ) : (
                  <div>No image available</div>
                )}
                <h2 className='text-2xl font-bold text-center py-8'>Name:{card.name}</h2>
                <h4 className='age text-black' >Age:{card.age}</h4>
                <p className=' text-black'>Problem:{card.problem}</p>
                <h4 className='amount  text-black'>Amount required:{card.amount}</h4>
                <h4 className='upi text-black' >UPI:{card.upi}</h4>
                <button className=' bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 text-black py-3' onClick={navigatetodonate}>Donate</button>
              </div>
            ))}
          </div>
        </div>
   
    </div>
  );
}

export default Home;
