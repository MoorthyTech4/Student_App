import { useState } from "react";
import StudentCard from "../components/StudentCard";


const StudentList = () => {

  const [students,setStudents] = useState([
  { id: 1, name: "Ashok kumar",   roll: "CS101", dept: "Computer Science" },
  { id: 2, name: "Rohit sharma",    roll: "CS102", dept: "Computer Science" },
  { id: 3, name: "Virat kholi",     roll: "EC101", dept: "Electronics" },
  { id: 4, name: "Suresh kumar",  roll: "EC102", dept: "Electronics" },
  { id: 5, name: "Manikandan", roll: "ME101", dept: "Mechanical" },
  { id: 6, name: "Anjali",   roll: "ME102", dept: "Mechanical" },
  { id: 7, name: "Abinaya",     roll: "IT101", dept: "Info. Technology" },
  { id: 8, name: "Vinoth",    roll: "IT102", dept: "Info. Technology" },
]);

 const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [dept, setDept] = useState("");

  const handleAddStudent = () => {
    if (!name || !roll || !dept) return;

    const newStudent = {
      id: students.length + 1,
      name,
      roll,
      dept,
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
    setDept("");
  };

  return (
    <div className="bg-black min-h-screen p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium mb-1">Student List</h1>
        <p className="mb-5 text-gray-500">Click "Add to Favourite" to save a student : )</p>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={handleAddStudent}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Student
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {students.map((item) => (
            <StudentCard
              key={item.id}
              id={item.id}
              name={item.name}
              roll={item.roll}
              dept={item.dept}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;