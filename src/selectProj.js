
const selectProj = () => {
  const allProjs = document.querySelectorAll('.proj-div');
  document.addEventListener('click', clickProj);
}

const clickProj = (e) => {
  const clickable = ['proj-div', 'proj-title', 'todo-div-header', 'todo-div-content'];
  for (let div of clickable) {
    if (e.target.classList.contains(div)) {
      console.log('hi');
    }
  }
}

export {
  selectProj,
}
