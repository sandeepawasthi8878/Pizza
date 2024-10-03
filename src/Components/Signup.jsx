import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;  
    return phoneRegex.test(phone);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (phone && !isValidPhone(phone)) { 
      setError('Please enter a valid phone number.');
      return;
    }

    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    navigate('/'); 
  };

  return (
    <div className="signup-container bg-zinc-600 min-h-screen flex justify-center items-center px-5">
      <div className="bg-zinc-400 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 mb-4 border rounded-lg bg-black text-white"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 mb-4 border rounded-lg bg-black text-white"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number (Optional)" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            className="w-full p-2 mb-4 border rounded-lg bg-black text-white"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
