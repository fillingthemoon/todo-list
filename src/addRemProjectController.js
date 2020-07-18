import { getTodos } from './todo.js';
import { Project } from './project.js';

const keys = []
const getNewId = () => {
  /*
  if (localStorage.length > 0) {
    return Math.max(...Object.keys(localStorage).map(x => parseInt(x))) + 1;
  } else {
    return 0;
  }
  */
  for (let i = 0; i < 100; i++) {
    if (!keys.includes(i)) {
      keys.push(i);
      return i;
    }
  }
}

const clickAddProjBtn = (projectArray) => {
  const projectContainer = document.getElementById('project-container'); 
  const projectContainerAllProjs = document.createElement('div');
  projectContainerAllProjs.id = 'project-container-all-projs';

  const addProjBtn = document.getElementById('project-container-add-proj-btn');
  addProjBtn.addEventListener('click', addNewProj);

  const todoItems = getTodos()[0];

  function addNewProj(e) {
    const newId = getNewId();
    let projectDiv = document.createElement('div');
    projectDiv.id = 'proj-div-' + newId; 
    projectDiv.classList.add('proj-div');

    const newProj = Project('New Project');
    let projectTitle = document.createElement('h3');
    projectTitle.classList = 'proj-title';
    projectTitle.id = 'proj-title-' + newId;
    projectTitle.textContent = newProj.getTitle();
    projectDiv.appendChild(projectTitle);

    newProj.addTodo(todoItems);
    const todoArray = newProj.getTodoArray();

    for (let i = 0; i < todoArray.length; i++) {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo-div');
      const todoDivHeader = document.createElement('p'); 
      todoDivHeader.classList.add('todo-div-header');
      todoDivHeader.textContent = todoArray[i].getTitle();
      const todoDivContent = document.createElement('p'); 
      todoDivContent.classList.add('todo-div-content');
      todoDivContent.textContent = todoArray[i].getDescription();

      todoDiv.appendChild(todoDivHeader);
      todoDiv.appendChild(todoDivContent);
      projectDiv.appendChild(todoDiv);
    }

    projectContainerAllProjs.appendChild(projectDiv);
    projectContainer.appendChild(projectContainerAllProjs);
    return projectContainer;
  }

}

const clickRemProjBtn = () => {

}

export {
  clickAddProjBtn,
  clickRemProjBtn,
}
