import { Link } from "react-router-dom";

function Navbar() {
  return (
   <nav className="flex items-center gap-6 px-6 h-14 border-b border-gray-200 bg-white">
      <span className="font-semibold text-orange-600">DocMind</span>
      <Link to="/" className="text-sm text-gray-700 hover:text-orange-600">
        Dashboard
      </Link>
      <Link to="/login" className="text-sm text-gray-700 hover:text-orange-600">
        Login
      </Link>
    </nav>
  )
}

export default Navbar
