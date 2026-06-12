import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentCard = (props) => {
  const { favourites, addFavourite, removeFavourite } = useContext(StudentContext);

  const isFavourite = favourites.find((item) => item.id === props.id);

  return (
    <div className="flex justify-between items-center border border-black rounded-md p-3 bg-white">
      <div>
        <p className="font-medium text-lg">{props.name}</p>
        <p className="text-sm text-gray-500">Roll No: {props.roll}</p>
        <p className="text-sm text-gray-500">Dept: {props.dept}</p>
      </div>
      {isFavourite ? (
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
          onClick={() => removeFavourite(props.id)}
        >
          Remove
        </button>
      ) : (
        <button
          className="bg-violet-500 text-white px-3 py-1 rounded-md text-sm"
          onClick={() =>
            addFavourite({ id: props.id, name: props.name, roll: props.roll, dept: props.dept })
          }
        >
          Add to Favourite
        </button>
      )}
    </div>
  );
};

export default StudentCard;