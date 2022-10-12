const arrProject = [];
for(let i = 0; i < 6; +i) {
    arrProject.push({
      name: 'Project name goes here',
      projectDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      image: 'images/slider-1.svg',
      githubIcon: 'images/ic-github.svg',
      liveIcon: 'images/ic-live.svg',
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
      sourceLink: 'https://github.com/ginabeki/My-portfolio',
      liveLink: 'https://ginabeki.github.io/My-portfolio/',
      previousArrow: 'Previous project',
      nextArrow: 'Next project',
    });
}

const popModal = document.getElementById('popModal');
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};
// eslint-disable-next-line no-unused-vars
function projectsDetails(projectIndex) {
  const myProject = arrProject[projectIndex];
  popModal.innerHTML = `<div class="pop-modal-content">
  <span onclick="closeModal()" id="close-btn" class="close">&times;</span>
      <div class="pop-modal-header">
      <div class="pop-modal-body">
        <div class="title-container">
          <h3 id="title">${myProject.name}</h3>
        </div>
        <div class="list"> 
        <ul class="tags" id="mytech">
        ${myProject.technologies
    .map((ele) => `<li class="lists">${ele}</>`)
    .join(' ')}
        </ul>
            </div>
        <div class="bg-image">
        <img class="desktop-img" src="${myProject.image}"/>
         <a class="back" onclick="plusSlides(-1)">&#10094;</a>
  <a class="front" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div class="img-wrap">
   <img class="slide-img" src="${myProject.image}"/>
   <img class="slide-img" src="${myProject.image}"/>
   <img class="slide-img" src="${myProject.image}"/>
   <img class="slide-img" src="${myProject.image}"/>
</div>
      </div>
            <p id="projectDescription">${myProject.projectDescription}</p>
        <div class="pop-modal-footer">
        <a href="${myProject.liveLink}" class"bt-tag">
          <button type="submit" class="show-project-btn">
          <span>See Live</span>
          <img class="icons-media" src="${
  myProject.liveIcon
}" alt="see the peoject live"/>
          </button>
        </a>
        <a href="${myProject.sourceLink}" class"bt-tag">
          <button type="submit" class="show-project-btn">
          <span>See Source</span>
          <img class="icons-media" src="${
  myProject.githubIcon
}" alt="see the source code"/>
          </button>
        </a>
      </div>
      <div class="prev-next">
      <p class="previous"><span class="arrow">&#8592;</span> ${
  myProject.previousArrow
}</p>
      <p class="next">${
  myProject.nextArrow
}<span class="arrow">&#8594;</span></p>
      </div>
      </div>
      </div> 
      `;
  popModal.style.display = 'block';
}
