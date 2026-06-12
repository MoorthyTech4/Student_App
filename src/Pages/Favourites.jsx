import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

const Favourites = () => {
  const { favourites } = useContext(StudentContext);

  return (
    <div className="bg-black min-h-screen p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium mb-1">Favourite Students</h1>
        <p className="mb-5 text-gray-500">
          {favourites.length === 0
            ? "You haven't added any favourites yet : )"
            : `${favourites.length} student${favourites.length > 1 ? "s" : ""} saved`}
        </p>

        {favourites.length === 0 ? (
          <p>
            Go to{" "}
            <Link to="/" className="underline text-violet-500">
              Student List
            </Link>{" "}
            and add some!
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {favourites.map((item) => (
              <StudentCard
                key={item.id}
                id={item.id}
                name={item.name}
                roll={item.roll}
                dept={item.dept}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;