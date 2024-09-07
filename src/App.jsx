import { useState } from "react"; 
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import { AppContext } from "./components/AppContext";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleOnAdd(projectData){
    const newProject = {...projectData, id: Math.random()};
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })    
  }

  function handleSelectedProject(id){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: id
      }
    })    
  }

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        projects: prevState.projects.filter((project)=>{
          return project.id !== prevState.selectedProjectId
        }),
        selectedProjectId: undefined
      }
    }) 
  }

  function handleAddTask(text){
    setProjectsState(prevState => {
      const newTask = {text: text, id: Math.random(), projectId: prevState.selectedProjectId};
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function deleteTask(taskId){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>{
          return task.id !== taskId
        })
      }
    }) 
  }

  let content = <SelectedProject project={ projectsState.projects[0]} onDelete={handleDeleteProject} addTask={handleAddTask} tasks={ projectsState.tasks } clearTask={deleteTask}/>;
  if (projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handleOnAdd} onCancel={handleCancelAddProject}/>
  }
  else if (projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <AppContext.Provider value={ { projectsState, setProjectsState } } >
        <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectedProject}/>
        {content}
      </AppContext.Provider>
    </main>
  );
}

export default App;
