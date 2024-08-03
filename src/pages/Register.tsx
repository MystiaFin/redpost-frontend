import Logo from "../assets/redpost.svg";
import { useState } from "react";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                alert('User registered successfully');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to the server');
        }
    }

    return (
        <div className="bg-black min-h-screen text-white flex justify-center items-center">
            <div className="pr-10">
                <img src={Logo} className="h-16 mb-4" />
                <p className="text-right text-xl">
                    A <span className="text-red-500 font-bold">Hybrid</span> of <br />
                    Many <span className="text-decoration-line: underline underline-offset-4">Social Media</span>
                </p>
            </div>
            <form onSubmit={register}>
                <div className="w-96 flex flex-col pl-10 gap-4 border-l-2">
                    <h1 className="text-3xl font-bold mb-4 text-center">
                        Welcome back!
                    </h1>
                    <input
                        type="text"
                        placeholder="username"
                        className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="bg-red-600 p-2 px-4 rounded-2xl">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;