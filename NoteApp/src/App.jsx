import  { useState } from "react";
import { X } from "lucide-react"

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([])
 const [deleteTask, setDeleteTask] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    
const copyTask = [...task];
copyTask.push({title, details})
setTask(copyTask)


    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx)=> {
    const copyTask = [...task]

    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className=" lg:flex   h-screen bg-black text-white">

      <form onSubmit={(e) =>{
        submitHandler(e)
      }} 
      className=" lg:w-1/2 p-10 flex gap-4 flex-col items-start ">
       
      <h1 className="text-4xl font-bold">Add Notes:</h1>

{/* //first input for heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="font-medium w-full px-5 py-2 border-2 rounded outline-none"
            value={title}
            onChange={(e) => {   
           setTitle(e.target.value)
            }}
          />

{/* //second input for details */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="font-medium outline-none w-full px-5 py-2 border-2 rounded h-20"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />

          <button className="bg-blue-500  active:scale-50 active:bg-blue-950 font-medium text-white px-5 py-2 rounded w-full ">
            Add Note
          </button>
      </form>

      <div className="bg-gray-500 lg:w-1/2 p-10 lg:border-l-2">
      <h1 className="text-4xl font-bold">Recents Notes:</h1>
  <div className="flex flex-wrap items-start justify-start gap-5 mt-5  overflow-auto h-[90%] ">


    {task.map(function(elem, idx) {
      return (
        <div key={idx} className="relative h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]  bg-cover text-black px-4 py-8">
          <h2 
          onClick={() => {
deleteNote(idx)
          }} 
          className="absolute top-5 right-5 p-1 bg-red-500 rounded-full cursor-pointer active:scale-120"><X size={16} strokeWidth={2.75} /></h2>
          <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
         <p className="mt-4 leading-tight font-medium text-gray-500 ">{elem.details}</p>
        </div>
      )  
    })
  }
  </div>
      </div>
        </div>
   
  );
};

export default App;
