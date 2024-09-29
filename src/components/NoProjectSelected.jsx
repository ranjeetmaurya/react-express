import { connect } from 'react-redux';
import { setProjectsState } from '../actions/actions';
import noProjectImage from "../assets/no-projects.png"
import Button from "./Button"

function NoProjectSelected({projectsState, setProjectsState}){

    function handleStartAddProject(){
        setProjectsState({
          ...projectsState,
          selectedProjectId: null
        });
      }

    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt='An empty task list' className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a Project or get started with new one</p>
            <p>
              <Button onClick={handleStartAddProject}>Create New project</Button>
            </p>

        </div>
    )
}

const mapStateToProps = state => ({
    projectsState: state.projectsState
  });
  
const mapDispatchToProps = (dispatch) => ({
    setProjectsState: (state) => dispatch(setProjectsState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoProjectSelected);