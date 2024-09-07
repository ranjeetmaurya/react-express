import { useState, useContext } from "react";
import { AppContext } from "./AppContext";

export default function NewTask({addTask}){

  const [enteredTask, setEnteredTask] = useState();
  const { projectsState, setProjectsState } = useContext(AppContext);

  function handleChange(event){
    setEnteredTask(event.target.value);
  }
    
  function handleClick(){
    addTask(enteredTask);
    setEnteredTask("");
  };

  function handleAddTask(){
    console.log(enteredTask);
    setProjectsState(prevState => {
      const newTask = {text: enteredTask, id: Math.random(), projectId: prevState.selectedProjectId};
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
    setEnteredTask("");
  }

  return (
      <div className="flex items-center justify-between">
          <input type='text' className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={ handleChange} value={enteredTask}></input>
          <button className="text-stone-700 hover:text-red-500" onClick={ handleAddTask }>Add Task</button>
      </div>
  )
}