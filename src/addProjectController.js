import { getTodos } from './todo.js';
import { Project } from './project.js';

const popBtn = (projectArray) => {
  const todoItems = getTodos()[0];
  const projectContainer = document.getElementById('project-container'); 
  const addProjBtn = document.getElementById('project-container-add-proj-btn');
  //console.log(projectContainer);
  //console.log(addProjBtn.textContent);
  addProjBtn.addEventListener('click', addNewProj);

  function addNewProj(e) {
    console.log('hi');
    let projectDiv = document.createElement('div');
    projectDiv.id = 1;
    projectDiv.classList.add('proj-div');

    const newProj = Project('Homework');
    let projectTitle = document.createElement('h3');
    projectTitle.classList = 'proj-title';
    projectTitle.id = 'proj-title-' + 1;
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
    projectContainer.appendChild(projectDiv);
    return projectContainer;
  }

}

export {
  popBtn,
}
