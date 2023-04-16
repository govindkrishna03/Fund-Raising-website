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
        <li className='p-4'><Link to='/logout'>Logout</Link></li>
      </ul>
    </div></div>
    <div className='w-full  py-10 px-9 sm:px-10 bg-gray-100'>
  <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  '>
    {cards.map((card) => (
      <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
        {card.image ? (
          <img className='object-cover w-full h-64' src={`http://127.0.0.1:8000${card.image}`} alt={card.name} />
        ) : (
          <div className='bg-gray-300 w-full h-64 flex items-center justify-center'>No image available</div>
        )}
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-2'>Name:{card.name}</h2>
          <p className='text-gray-600 text-lg mb-2'>Problem:{card.problem}</p>
         
            <p className='text-gray-700 text-xl'>Age:{card.age} years old</p>
            <p className='text-gray-700 text-xl'>Amount required: ₹{card.amount}</p>
       
          <div className='mt-4 text-center'>
            <button className='bg-black text-white py-3 px-4 rounded-md ' onClick={navigatetodonate}>Donate</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   
    </div>
  );
}

export default Home;
