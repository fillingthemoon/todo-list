import { popProjects } from './project.js';

const content = document.getElementById('content');

// Create sidebar header
function createSidebarHeaderDiv() {
  const headerDiv = document.createElement('div');
  headerDiv.id = 'sidebar-container-header';

  const header = document.createElement('h1');
  header.textContent = 'W E A V R';

  const subHeader = document.createElement('h2');
  subHeader.textContent = 'by fillingthemoon ';
  const repoLink = document.createElement('a');
  repoLink.href = 'https://github.com/fillingthemoon/todo-list';
  repoLink.textContent = 'repo here';
  subHeader.appendChild(repoLink);

  headerDiv.appendChild(header);
  headerDiv.appendChild(subHeader);
  return headerDiv;
}

const popSidebar = () => {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.id = 'sidebar-container';

  sidebarContainer.appendChild(createSidebarHeaderDiv());
  sidebarContainer.appendChild(popProjects());
  
  content.appendChild(sidebarContainer);
}

export {
  popSidebar,
}
