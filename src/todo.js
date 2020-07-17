const content = document.getElementById('content');

// Factory to create Todos
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

// Create Todos and Todo Array
function createTodos() {
  const todo1 = Todo('Math Homework', 'Do math homework', '18/07/20', 'Medium');
  const todo2 = Todo('Sweep', 'Sweep the floor', '19/07/20', 'High');
  const todo3 = Todo('Lunch', 'Cook mac n cheese', '20/07/20', 'Low');
  const todo4 = Todo('Push-ups', 'Do 100 push-ups', '21/07/20', 'High');

  const todoArray = [todo1, todo2, todo3, todo4];

  return todoArray;
}

const getTodos = () => {
  return createTodos();
}

export {
  getTodos,
}
