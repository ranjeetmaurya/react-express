import { useState } from "react"; 
import {
  BrowserRouter
} from 'react-router-dom';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import { AppContext } from "./components/AppContext";
import { connect } from 'react-redux';
import { setProjectsState } from './actions/actions';
import LoginForm from './components/LoginForm';
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoute from "./routes/PublicRoutes";

function App({ projectsState, setProjectsState } = props) {
  
  function handleStartAddProject(){
    setProjectsState({
      ...projectsState,
      selectedProjectId: null
    });
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
    content = <NewProject />
  }
  else if (projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
      <AppContext.Provider value={ { projectsState, setProjectsState } } >
        <BrowserRouter>
          <PublicRoute />
          <main className="h-screen my-8 flex gap-8">
            <PrivateRoute>
              <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectedProject}/> 
              {content}
            </PrivateRoute>
          </main>        
        </BrowserRouter>  
      </AppContext.Provider>
  );
}

const mapStateToProps = state => ({
  projectsState: state.projectsState
});

const mapDispatchToProps = (dispatch) => ({
  setProjectsState: (state) => dispatch(setProjectsState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
