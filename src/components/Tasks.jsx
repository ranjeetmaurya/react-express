import { useContext } from "react";
import NewTask from "./NewTask";
import { AppContext } from "./AppContext";

export default function Tasks({addTask, tasks, clearTask}){

  const { projectsState, setProjectsState } = useContext(AppContext);

  function handleClear(taskId){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>{
          return task.id !== taskId
        })
      }
    })    
  }

  
  return (
        <section>
            <h2 className="text-2xl">
              <NewTask addTask={addTask}/>
            </h2>
            <p></p>
            { tasks.length == 0 && ( 
              <p>No task added</p>
            ) }
            {
              tasks.length > 0 && 
              <ul> 
                 { tasks.map( (task) => (
                  <li key={task.id} className="flex items-center justify-between my-4">
                    <span>{ task.text }</span>
                    <button onClick={ () => handleClear(task.id)}>Clear</button>
                  </li>
                  ))}
              </ul>
            } 
        </section>
    )

} 