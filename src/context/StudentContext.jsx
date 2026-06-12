import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    let alreadyExists = favourites.find((item) => item.id === student.id);
    if (!alreadyExists) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (id) => {
    let updated = favourites.filter((item) => item.id !== id);
    setFavourites(updated);
  };

  return (
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;