import { checkLocalStorage } from './localStorage.js';
import { getTodos } from './todo.js';

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

// Create Projects and Project Array
function addProjects() {

  const proj1 = Project('Homework');
  const proj2 = Project('House work');
  const proj3 = Project('Meals');
  const proj4 = Project('Exercise');

  const projectArray = [proj1, proj2, proj3, proj4];
  const todoArray = getTodos();
  
  for (let i = 0; i < projectArray.length; i++) {
    projectArray[i].addTodo(todoArray[i]); 
  }

  return projectArray;
}

// Create container for Projects
function createProjectContainer(projectArray) {
  const projectContainer = document.createElement('div');
  projectContainer.id = 'project-container';

  const projectContainerHeaderDiv = document.createElement('div');
  projectContainerHeaderDiv.id = 'project-container-header-div';

  const projectContainerHeader = document.createElement('h3');
  projectContainerHeader.id = 'project-container-header';
  projectContainerHeader.textContent = 'My Lists';

  const projectContainerAddBtn = document.createElement('button');
  projectContainerAddBtn.id = 'project-container-add-btn';
  projectContainerAddBtn.textContent = '+';

  projectContainerHeaderDiv.appendChild(projectContainerHeader);
  projectContainerHeaderDiv.appendChild(projectContainerAddBtn);
  projectContainer.appendChild(projectContainerHeaderDiv);
  
  projectArray = addProjects();

  for (let i = 0; i < projectArray.length; i++) {
    let projectDiv = document.createElement('div');
    projectDiv.id = i + 1;
    projectDiv.classList.add('proj-div');
  
    let projectTitle = document.createElement('h3');
    projectTitle.classList = 'proj-title';
    projectTitle.id = 'proj-title-' + (i + 1);
    projectTitle.textContent = projectArray[i].getTitle();
    projectDiv.appendChild(projectTitle);

    const todoArray = projectArray[i].getTodoArray();

    for (let j = 0; j < todoArray.length; j++) {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo-div');
      const todoDivHeader = document.createElement('p'); 
      todoDivHeader.classList.add('todo-div-header');
      todoDivHeader.textContent = todoArray[j].getTitle();
      const todoDivContent = document.createElement('p'); 
      todoDivContent.classList.add('todo-div-content');
      todoDivContent.textContent = todoArray[j].getDescription();

      todoDiv.appendChild(todoDivHeader);
      todoDiv.appendChild(todoDivContent);
      projectDiv.appendChild(todoDiv);
    }

    projectContainer.appendChild(projectDiv);
  }
  
  return projectContainer; 
}

const render = () => {
  
}

const popProjects = () => {
  return createProjectContainer();
}

export {
  popProjects,
}
