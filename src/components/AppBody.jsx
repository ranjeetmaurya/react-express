import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";
import SelectedProject from "./SelectedProject";
import { AppContext } from "./AppContext";
import { connect } from "react-redux";
import { setProjectsState } from "../actions/actions";
import LoginForm from "./LoginForm";
import Header from "./Header";

function AppBody({ projectsState, setProjectsState } = props) {
  function handleStartAddProject() {
    setProjectsState({
      ...projectsState,
      selectedProjectId: null,
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => {
          return project.id !== prevState.selectedProjectId;
        }),
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function deleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== taskId;
        }),
      };
    });
  }

  let content = (
    <SelectedProject
      project={projectsState.projects[0]}
      onDelete={handleDeleteProject}
      addTask={handleAddTask}
      tasks={projectsState.tasks}
      clearTask={deleteTask}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <AppContext.Provider value={{ projectsState, setProjectsState }}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectedProject}
        />
        {content}
      </main>
    </AppContext.Provider>
  );
}

const mapStateToProps = (state) => ({
  projectsState: state.projectsState,
});

const mapDispatchToProps = (dispatch) => ({
  setProjectsState: (state) => dispatch(setProjectsState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
