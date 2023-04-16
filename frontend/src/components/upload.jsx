import React , {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import background_img from '../assets/humanity.jpg';


function  UploadDetails(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[age,setAge] = useState("");
    const[problem,setProblem] = useState("");
    const[amount,setAmount] = useState("");
    const[upi,setUpi] = useState(" ");
    const[image,setImage] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async(event)=>{
        event.preventDefault();
        const user ={name,email,age,problem,amount,upi};
        const formData = new FormData();
        formData.append('image', image);
        for (const key in user) {
            formData.append(key, user[key]);
        }
        try{
            const response = await fetch('http://127.0.0.1:8000/posting/', {
                method:"POST",
                body:formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:',data);
                navigate('/home')
            }
            else{
                console.log('Registration Failed')
            }
        }
        catch(error){
            console.log('Error:',error);
        }
    };
    

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };    

  return (
    <div className='flex flex-col md:flex-row mt-12 ml-16 text-white '>
    <div className=''>
      <img src={background_img} alt='background' className='mt-20'></img>
    </div>
    <div className=' md:w-1/ 4 mt-5 px   mr-4 border border-dotted rounded-xl    bg-white text-black  '>
      <form className="ml-[50px] mx-[50px]  text-center text-2xl" onSubmit={handleSubmit}>
        <h2 className="text-black font-bold mt-12  text-3xl">Upload Your Details Here</h2>
        <div className="flex flex-col mb-4 ">
          <label className=''>Name:</label>
          <input 
            className='p-1 mt-2 border  text-gray-800 bg-gray-300 border-black rounded-md'
            type='text' 
            value={name} 
            name='name'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className=''>Age:</label>
          <input 
            className='p-1 mt-1 border   text-gray-800 bg-gray-300 border-black rounded-md'
            type='text' 
            value={age} 
            name='age'
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 py-4">
          <label className=''>Email:</label>
          <input 
            className='p-1 mt-1 border  text-gray-800 bg-gray-300 border-black rounded-md'
            type='email' 
            value={email} 
            name='email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className=''>Problem:</label>
          <input
            className='p-1 mt-1 border  text-gray-800 bg-gray-300 border-black rounded-md'
            type='text'
            value={problem} 
            name='problem'
            onChange={(event) => setProblem(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className=''>Amount:</label>
          <input 
            className='p-1 mt-1 border  text-gray-800 bg-gray-300 border-black rounded-md'
            type='text' 
            value={amount} 
            name='amount'
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className=''>UPI:</label>
          <input 
            className='p-1 mt-1 border   text-gray-800 bg-gray-300 border-black rounded-md'
            type='text' 
            value={upi} 
            name='upi'
            onChange={(event) => setUpi(event.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className=''>Image:</label>
          <input 
            className='p-1 mt-1   text-white border-black rounded-md'
            accept='image/png,image/jpeg'
            type='file'
            name='image'
            onChange={handleImageChange}
          />
        </div>
        <button className='bg-pink-500 text-white py-2 px-4 rounded' type="submit">Submit</button>
      </form>
    </div>
  </div>
  

   
   
  );

  }
  export default UploadDetails;