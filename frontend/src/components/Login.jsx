import React, { useState } from "react";    
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   

    const navigatetoRegister = () => {
        navigate('/register')
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000");
            if (response.ok) {
                const data = await response.json();
                const user = data.find((u) => u.username === username && u.password === password);
                if (user) {
                    console.log('Authentication successful.');
                    localStorage.setItem('token','8#jnkdfgjk9734445983859435943859udfjbg9384tgjfdb983jkfdgbjk')
                    
                    toast.success("You have Successfully Logged In")

                    setTimeout(() => {
                        navigate('/home');
                        
                    }, 2000);
                } else {
                    console.log('Authentication failed.');
                }
            } else {
                console.log('Authentication failed.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return (
        <div className="App">
            <ToastContainer />
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input value={username} type="username" onChange={handleUsernameChange} className="auth-input" placeholder="username" required></input>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" className="auth-input" placeholder="********" required></input>
                    <br></br>
                    <button className="auth-btn">Log In</button>
                </form>
                <button className="link-btn"  onClick={navigatetoRegister}>Don't have an account? Register here.</button>
           </div>
        </div>
    )
};
