import { Link } from "react-router-dom";
import { Settings, MessageSquare, LogOut, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants/index";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const handleThemeChange = (t) => {
    setTheme(t);
    localStorage.setItem("chat-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg font-bold">Chatty</h1>
        </Link>

        {/* Right Section */}
        {authUser && (
          <div className="flex items-center gap-2">
            

            {/* Settings */}
            <Link to="/setting" className="btn btn-sm gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {/* Profile */}
            <Link to="/profile" className="btn btn-sm gap-2">
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            {/* Logout */}
            <button className="flex gap-2 items-center btn btn-sm" onClick={logout}>
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
