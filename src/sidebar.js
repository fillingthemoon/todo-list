import { popProjects } from './project.js';

const content = document.getElementById('content');

// Create sidebar header
function createSidebarHeaderDiv() {
  const headerDiv = document.createElement('div');
  headerDiv.id = 'sidebar-container-header-div';

  const header = document.createElement('h1');
  header.id = 'sidebar-container-header'; 
  header.textContent = 'W E Λ V R';

  const tagline = document.createElement('h2');
  tagline.id = 'sidebar-container-tagline';
  tagline.textContent = 'A Simple & Intuitive To-do List Manager';

  const subHeader = document.createElement('h2');
  subHeader.id = 'sidebar-container-subheader';
  subHeader.textContent = 'by fillingthemoon ';
  const repoLink = document.createElement('a');
  repoLink.href = 'https://github.com/fillingthemoon/todo-list';
  repoLink.target = '_blank';
  repoLink.textContent = 'repo here';
  subHeader.appendChild(repoLink);

  headerDiv.appendChild(header);
  headerDiv.appendChild(tagline);
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
