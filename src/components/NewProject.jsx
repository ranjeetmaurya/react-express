import { useRef  } from "react"
import Input from "./Input"
import Modal from "./Modal";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setProjectsState } from '../actions/actions';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';

 function NewProject({projectsState, setProjectsState}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    let ckValue = "";
    
    function handleSave(){
      const enteredTitle = title.current.value;
      console.log(ckValue);
      const enteredDescription = ckValue;
      const enteredDueDate = dueDate.current.value;
      if (
        enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === ''
      ) {
        modal.current.open();
        return;
      }

      const newProject = {
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        id: Math.random()
      };

      setProjectsState( {
        ...projectsState,
        projects: [...projectsState.projects, newProject]
      } ) 
    }

    function onCancel(){
      setProjectsState( {
        ...projectsState,
        selectedProjectId: undefined
      }
    )   
    }
      
    return (
        <>
          <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Opps...looks like you forgot to input values</p>
          </Modal>
          <div className="w-[35rem] mt-16">
              <menu className="flex item-center justify-end gap-4 my-4">
                  <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                  </li>
                  <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                  </li>
              </menu>
              <div>
                <Input type='text' ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <CKEditor ref={description} editor={ ClassicEditor }
                  config={ {
                    toolbar: {
                        items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                    },
                    plugins: [
                        Bold, Essentials, Italic, Mention, Paragraph, Undo
                    ],
                    initialData: '<p>Hello from CKEditor 5 in React!</p>',

                    }
                  }
                  onChange={(event, editor) => {
                    ckValue = editor.getData();
                  }}
                  onReady={ ( editor ) => {
                    ckValue = editor.getData();
                  }}                  
                />
                <Input type='date' ref={dueDate} label="Due Date" />
              </div>
          </div>
        </>
    )
    }

const mapStateToProps = state => ({
  projectsState: state.projectsState
});

const mapDispatchToProps = (dispatch) => ({
  setProjectsState: (state) => dispatch(setProjectsState(state))
});
    
NewProject.propTypes = {
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewProject);