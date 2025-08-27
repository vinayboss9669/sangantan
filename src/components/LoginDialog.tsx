import React, { useState, FormEvent } from 'react';
import { Button } from "./ui/button";
// import { Dialog } from "./ui/dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaTwitter } from 'react-icons/fa';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Login failed');
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
      <div className="max-w-[350px] bg-gradient-to-b from-white to-blue-50 rounded-[40px] p-4 border-4 border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)] m-2 ml-6">
        <h2 className="text-center font-extrabold text-[30px] text-blue-600 mb-4">Login In</h2>
        <form onSubmit={handleLogin} className="mt-5 space-y-4">
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
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-gray-400">Or Sign in with 
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="text-blue-500 hover:underline text-[12px] ml-2"
            >
              ← Back
            </button>
          </span>
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-gradient-to-r from-black to-gray-500 border-4 border-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 transition-all">
              <FcGoogle size={22} />
            </button>
            <button className="bg-gradient-to-r from-black to-gray-500 border-4 border-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 transition-all">
              <FaApple size={22} color="white" />
            </button>
            <button className="bg-gradient-to-r from-black to-gray-500 border-4 border-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 transition-all">
              <FaTwitter size={22} color="white" />
            </button>
          </div>
        </div>
        <span className="block text-center mt-4">
          <a href="#" className="text-blue-500 text-[9px] hover:underline">Learn user licence agreement</a>
        </span>
      </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;