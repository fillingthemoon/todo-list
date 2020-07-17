const content = document.getElementById('content');

const popMainpage = () => {
  const mainpageContainer = document.createElement('div');
  mainpageContainer.id = 'mainpage-container';
  mainpageContainer.textContent = 'MAINPAGE';
  
  content.appendChild(mainpageContainer);
}

export {
  popMainpage,
}
