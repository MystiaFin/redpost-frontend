import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/redpost.svg";

function Login() {
    const [userTag, setUserTag] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/auth', {
                userTag,
                password
            });

            if (response.data.token) {
                // Store the token in localStorage or a more secure place
                localStorage.setItem('token', response.data.token);
                // Redirect to the home page or dashboard
                navigate('/dashboard');
            }
        } catch (err) {
            setError('Invalid username or password');
            console.error('Login error', err);
        }
    };

    return (
        <div className="bg-black min-h-screen text-white flex justify-center items-center">
            <div className="pr-10">
                <img src={Logo} alt="Logo" className="h-16 mb-4"/>
                <p className="text-right text-xl">
                    A <span className="text-red-500 font-bold">Hybrid</span> of <br />
                    Many <span className="underline underline-offset-4">Social Media</span>
                </p>
            </div>
            <div className="w-96 flex flex-col pl-10 gap-4 border-l-2">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Welcome back!
                </h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        placeholder="username" 
                        className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none" 
                        value={userTag}
                        onChange={(e) => setUserTag(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-red-600 p-2 px-4 rounded-2xl">Login</button>
                </form>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <p className="text-gray-400">
                    don't have an account? <u>sign up!</u>
                </p>
            </div>
        </div>
    );
}

export default Login;