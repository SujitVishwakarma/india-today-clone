import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in');
      setTimeout(() => {
        navigate('/'); 
      }, 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl">
        {/* Sign In Form */}
        <div className="p-8 w-1/2">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-pink-500 text-white p-3 rounded-lg font-semibold">
              Sign In
            </button>
          </form>
        </div>

        {/* Welcome Section */}
        <div className="w-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 flex flex-col justify-center items-center rounded-r-lg">
          <h2 className="text-3xl font-bold mb-4">Welcome to login</h2>
          <p className="mb-6">Don't have an account?</p>
          <Link to="/signup">
            <button className="bg-white text-pink-500 px-6 py-2 rounded-full font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
