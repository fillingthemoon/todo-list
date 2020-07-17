const content = document.getElementById('content');

// Create sidebar header
function createSidebarHeaderDiv() {
  const headerDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = 'W E A V R';

  headerDiv.appendChild(header);
  return headerDiv;
}

// Factory to create to-dos
const Todo = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
  }
}

// Create div element for todos
function createTodo() {
  const todoContainer = document.createElement('div');
  todoContainer.id = 'todo-container';

  const todo1 = Todo('Homework', 'Do math homework', '18/07/20', 'Medium');
  const todo2 = Todo('Sweep', 'Sweep the floor', '19/07/20', 'High');
  const todo3 = Todo('Cook lunch', 'Cook mac n cheese', '20/07/20', 'Low');
  const todo4 = Todo('Take out trash', 'Use spare plastic bags for trash', '21/07/20', 'High');

  const todoArray = [todo1, todo2, todo3, todo4];

  for (let i = 0; i < todoArray.length; i++) {
    let todoDiv = document.createElement('div');
    todoDiv.id = i + 1;
    todoDiv.classList.add('todo-div');
    todoDiv.textContent = todoArray[i].getTitle();
    todoContainer.appendChild(todoDiv);
  }
  
  return todoContainer;
}

const popSidebar = () => {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.id = 'sidebar-container';

  sidebarContainer.appendChild(createSidebarHeaderDiv());
  sidebarContainer.appendChild(createTodo());
  
  content.appendChild(sidebarContainer)
}

export {
  popSidebar,
}
