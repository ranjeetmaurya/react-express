import Tasks from "./Tasks";
import sanitize from "sanitize-html";

export default function SelectedProject({project, onDelete, addTask, tasks, clearTask}){

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    date: 'numeric'
  });

  const sanitizedDescription = sanitize(project.description);
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between  mb-2">
                    <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950 hover:bg-stone-150" onClick={onDelete}>DELETE</button>
                </div>    
                <p className="mb-4 text-stone-400">
                  <span dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />

                </p> 
                <p className="text-stone-600 whitespace-pre-wrap">{formattedDate}</p> 
            </header>
            <Tasks addTask={addTask} tasks={tasks} clearTask={clearTask}/>
        </div>
    )
}