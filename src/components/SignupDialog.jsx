import React, { useState } from 'react';
import { Button } from "./ui/button";
// import { Dialog } from "./ui/dialog";
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaGithub, FaTwitter } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


// Remove unused TypeScript interface in a .jsx file

const SignupDialog = ({ open, onOpenChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Signup failed');
      } else {
        onOpenChange(false);
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
      <div className="max-w-[350px] bg-gradient-to-b from-white to-blue-50 rounded-[40px] p-2 border-4 border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)] m-1 ml-6">
        <h2 className="text-center font-extrabold text-[30px] text-blue-600 mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="mt-5 space-y-4">
          <input
            type="text"
            className="w-full bg-white border-none px-5 py-4 rounded-[20px] mt-2 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-blue-400 border-2"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full bg-white border-none px-5 py-4 rounded-[20px] mt-2 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-blue-400 border-2"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full bg-white border-none px-5 py-4 rounded-[20px] mt-2 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-blue-400 border-2"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <span className="block mt-2 ml-2 text-xs text-blue-500">
            <a href="#" className="hover:underline">Forgot Password ?</a>
          </span>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button
            type="submit"
            className="w-full font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 mt-4 rounded-[20px] shadow-[0_20px_10px_-15px_rgba(133,189,215,0.88)] hover:scale-105 transition-all"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-gray-400">Or Sign up with   <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="text-blue-500 hover:underline  text-[12px] ml-2"
        >
          ← Back
        </button></span> 
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-gradient-to-r from-black to-gray-500 border-4 border-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 transition-all">
              <FcGoogle size={22} />
            </button>
            <button className="bg-gradient-to-r from-black to-gray-500 border-4 border-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 transition-all">
              <FaGithub size={22} color="white" />
            </button>
            
          </div>
        </div>
         
        <span className="block text-center mt-4">
          <a href="#" className="text-blue-500  hover:underline">Learn user licence agreement</a>
        
        </span>
      </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;