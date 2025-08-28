import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sagantan-gray-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sagantan-blue mb-4">404</h1>
        <p className="text-xl text-sagantan-text-light mb-8">Oops! Page not found</p>
        <Button variant="default" className="bg-sagantan-blue hover:bg-sagantan-blue-dark">
          <a href="/" className="text-sagantan-white no-underline">
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
