import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import img1 from "@/assets/img1.jpeg";
import LoginDialog from "@/components/LoginDialog";
import SignupDialog from "@/components/SignupDialog";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
  const [showSignupDialog, setShowSignupDialog] = useState<boolean>(false);

  // Handle dialogs - toggle behavior
  const handleLoginToggle = () => {
    setShowLoginDialog(!showLoginDialog);
    if (!showLoginDialog) setShowSignupDialog(false);
  };

  const handleSignupToggle = () => {
    setShowSignupDialog(!showSignupDialog);
    if (!showSignupDialog) setShowLoginDialog(false);
  };

  // Dialog state change handlers
  const handleLoginChange = (open: boolean) => {
    setShowLoginDialog(open);
    if (open) setShowSignupDialog(false);
  };

  const handleSignupChange = (open: boolean) => {
    setShowSignupDialog(open);
    if (open) setShowLoginDialog(false);
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-sagantan-white/95 backdrop-blur-md shadow-soft z-50 border-b-0">

        <div
          className="flex justify-between items-center w-full px-6 py-4"
          
        >
            <div className="flex justify-between items-center h-16 w-full">

            {/* Left Side - Logo + BVES Name */}
            <div className="flex items-center justify-start space-x-5">
              <img src={img1} alt="Logo" className="h-18 w-16 rounded-full" />
              <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl md:text-2xl text-sagantan-text">
                बहुजन विद्यार्थी एकता संघ
              </span>
              <span className="text-base md:text-lg font-medium text-sagantan-text">
                Bahujan Vidyarthi Ekta Sangh
              </span>
              </div>
            </div>

            {/* Right Side - Links + Buttons */}
            <div className="flex items-center space-x-6">
              {/* Desktop Links */}
              <div className="hidden md:flex space-x-12">
              <a href="#home" className="text-sagantan-text hover:text-sagantan-blue transition-colors text-lg">
                Home
              </a>
              <a href="#objectives" className="text-sagantan-text hover:text-sagantan-blue transition-colors text-lg">
                Objectives
              </a>
              <a href="#slogans" className="text-sagantan-text hover:text-sagantan-blue transition-colors text-lg">
                Slogans
              </a>
              <a href="/notices" className="text-sagantan-text hover:text-sagantan-blue transition-colors text-lg">
                Notices
              </a>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-sagantan-text hover:text-sagantan-blue text-xl px-6 py-2"
              >
                Admin
              </Button>
              <Button
                onClick={handleLoginToggle}
                variant="outline"
                className="border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800 text-lg px-6 py-2"
              >
                Login
              </Button>
              <Button
                onClick={handleSignupToggle}
                className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg px-6 py-2"
              >
                Sign Up
              </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sagantan-text w-10 h-10"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
              </div>
            </div>
            </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-sagantan-white border-t border-sagantan-gray-light">
          <a href="#home" className="block px-4 py-3 text-sagantan-text hover:text-sagantan-blue text-xl">
            Home
          </a>
          <a href="#objectives" className="block px-4 py-3 text-sagantan-text hover:text-sagantan-blue text-xl">
            Objectives
          </a>
          <a href="#slogans" className="block px-4 py-3 text-sagantan-text hover:text-sagantan-blue text-xl">
            Slogans
          </a>
          <a href="/notices" className="block px-4 py-3 text-sagantan-text hover:text-sagantan-blue text-xl">
            Notices
          </a>
          <div className="px-4 py-3 space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start text-sagantan-text text-xl py-5"
            >
              Admin
            </Button>
            <Button
              variant="default"
              className="w-full bg-sagantan-blue hover:bg-sagantan-blue-dark text-xl py-5"
              onClick={handleLoginToggle}
            >
              Login
            </Button>
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-xl py-5"
              onClick={handleSignupToggle}
            >
              Sign Up
            </Button>
          </div>
              </div>
            </div>
          )}
        </div>
      </nav>


      <LoginDialog open={showLoginDialog} onOpenChange={handleLoginChange} />
      <SignupDialog open={showSignupDialog} onOpenChange={handleSignupChange} />
    </>
  );
};

export default Navigation;