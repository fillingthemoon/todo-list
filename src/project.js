import { checkLocalStorage } from './localStorage.js';
import { popBtn } from './addProjectController.js';

checkLocalStorage();
const content = document.getElementById('content');

// Factory to create Projects
const Project = (title) => {
  let todoArray = [];

  const getTitle = () => title;
  const getTodoArray = () => todoArray;

  const addTodo = newTodo => {
    todoArray.push(newTodo);
  }

  return {
    getTitle,
    getTodoArray,
    addTodo,
  }
}

// Create container for Projects
const createProjectContainer = (projectArray) => {
  const projectContainer = document.createElement('div');
  projectContainer.id = 'project-container';

  const projectContainerHeaderDiv = document.createElement('div');
  projectContainerHeaderDiv.id = 'project-container-header-div';

  const projectContainerHeader = document.createElement('h3');
  projectContainerHeader.id = 'project-container-header';
  projectContainerHeader.textContent = 'My Projects';

  const projectContainerAddProjBtn = document.createElement('button');
  projectContainerAddProjBtn.id = 'project-container-add-proj-btn';
  projectContainerAddProjBtn.textContent = '+';

  projectContainerHeaderDiv.appendChild(projectContainerHeader);
  projectContainerHeaderDiv.appendChild(projectContainerAddProjBtn);
  projectContainer.appendChild(projectContainerHeaderDiv);
  
  return projectContainer; 
}

export {
  createProjectContainer,
  Project,
}
