import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import './register.css'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [username, setUserName] = useState('');

    const navigate = useNavigate();

    const navigatetologin=()=>{
      navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, username, password };
        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                navigate('/login');
            } else {
                console.log('Registration failed.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={username} onChange={(e) => setUserName(e.target.value)}name="username" id="username" placeholder="username" required/>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" required></input>
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" required></input>
                    <br></br>
                    <button className="reg">Register</button>
                </form>
                <button className="link-btn" onClick={navigatetologin}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}
