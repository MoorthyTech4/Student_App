import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Navbar = () => {
  const { favourites } = useContext(StudentContext);

  return (
    <div className="bg-violet-500 px-10 py-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-medium">🎓 StudentApp</h1>
      <div className="flex gap-5">
        <Link to="/" className="text-white underline">
          Student List
        </Link>
        <Link to="/favourites" className="text-white underline">
          Favourites ({favourites.length})
        </Link>
      </div>
    </div>
  );
};

export default Navbar;