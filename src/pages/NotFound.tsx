import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
    );
  }, [location.pathname]);

  const goHome = () => {
    navigate("/");  // Navigate back to the home page
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-netflix-black text-white p-6">
        <div className="max-w-lg text-center">
          <div className="text-netflix-red font-bold text-6xl mb-8 transform -skew-x-12">
            NETFLIX
          </div>

          <h1 className="text-5xl font-bold mb-6">Lost your way?</h1>

          <p className="text-xl text-white/80 mb-10">
            Sorry, we can't find the page you're looking for. You'll find lots to explore on the home page.
          </p>

          <Button
              onClick={goHome}
              className="bg-netflix-red hover:bg-netflix-red/90 text-white px-8 py-6 text-lg font-medium flex items-center gap-2 mx-auto shadow-lg hover:scale-105 transition-transform"
          >
            <Home className="h-5 w-5 mr-2" />
            Netflix Home
          </Button>

          <div className="mt-12 text-white/60 inline-block border border-white/20 px-3 py-1">
            Error Code: NSES-404
          </div>
        </div>
      </div>
  );
};

export default NotFound;
