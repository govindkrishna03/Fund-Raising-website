import React, {useState} from 'react';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentForm() {

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry,setCardExpiry] = useState('');
  const [cardCvc,setCardCvc] = useState('');
  const [amountToDonate,setAmount] = useState(' ');
  const [cardError,setCardError] = useState('');
  

  const handleCardNumberChange = (event) =>{
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) =>{
    setCardName(event.target.value);
  };

  const handleCardExpiryChange = (event) =>{
    setCardExpiry(event.target.value);
  };

  const handleCardCvcChange = (event) =>{
    setCardCvc(event.target.value);
  };

  const handleAmount = (event) =>{
    setAmount(event.target.value);
  };

  const toast_note = (event) =>{
    toast("Payment Successfully Done!!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCardError('');
    if (cardNumber === ''){
            setCardError("Please Enter a valid card number: ");
            return;
    }
    if (cardName === ''){
            setCardError("Please Enter a valid cardholder name: ");
            return;
    }
    if (cardExpiry === ''){
            setCardError("Please Enter the card expiry date: ");
            return;
    }
    if (cardCvc === ''){
            setCardError("Please Enter the card security code (CVC): ");
            return;
    }
    if (amountToDonate === ''){
        setAmount("Please Enter the amount you want to donate: ")
    }
    //Process payment 
    // .
  };

  
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-20 m-auto bg-white bg-opacity- rounded-md shadow-xl shadown-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-pink-600  uppercase ">Payment form</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
            <label for="cardNumber" className='block text-base font-semibold text-gray-800'>Card Number</label>
            <input type="number" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-300 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40 ' value={cardNumber}   onChange={handleCardNumberChange}/>
        </div>
        <div className="mb-2">
            <label for="cardName" className='block text-base font-semibold text-gray-800'>Cardholder Name</label>
            <input type="text" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-300 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardName}   onChange={handleCardNameChange}/>
        </div>
        <div className="mb-2">
            <label for="cardExpiry" className='block text-base font-semibold text-gray-800'>Expiry Date</label>
            <input type="text" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-300 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardExpiry}   onChange={handleCardExpiryChange}/>
        </div>
        <div className="mb-2">
            <label for="cardCvc" className='block text-base font-semibold text-gray-800'>CVC</label>
            <input type="text" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-300 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardCvc}   onChange={handleCardCvcChange}/>
        </div>
        <div className='mb-2'>
            <label for="amountToDonate" className='block text-base font-semibold text-gray-800' >Amount to donate</label>
            <input type="number" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-300 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={amountToDonate} onChange={handleAmount} />
        </div>
        {cardError && <div className="error">{cardError}</div>}
        <div className='mt-6 pt-4'>
            <button className="w-full h-[50px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-400  hover:bg-pink-500 focus:outline-none focus:bg-indigo-600" type="submit" onClick={toast_note} >Pay Now</button>
            <ToastContainer />        
        </div>
    </form>
    
        </div>
    </div>
  )
}

export default PaymentForm







