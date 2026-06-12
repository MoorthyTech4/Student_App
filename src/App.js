import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentProvider from "./context/StudentContext";
import Navbar from "./components/Navbar";
import StudentList from "./Pages/Studentlist";
import Favourites from "./Pages/Favourites";
import './index.css'
function App() {
  return (
    <div>
      <StudentProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </div>
  );
}

export default App;