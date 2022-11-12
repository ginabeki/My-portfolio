const arrProject = [
  {
    name: 'Conference Website',
    projectDescription:
      'This is a website for an Art Week event that contains all the programs itinerary including the speakers, partners, a snippet of previous events, and a little bit more information to better help you engage more with the brand.',
    image: 'images/artsy.png',
    githubIcon: 'images/ic-github.svg',
    liveIcon: 'images/ic-live.svg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    sourceLink: 'https://github.com/ginabeki/Conference-Website',
    liveLink: 'https://ginabeki.github.io/Conference-Website/',
    previousArrow: 'Previous project',
    nextArrow: 'Next project',
  },
  {
    name: 'Awesome books SPA',
    projectDescription:
      'In this project, I refactored the Awesome books app code. The goal is to make it more organized by using modules. My ES6 knowledge was also put to test.',
    image: 'images/library.png',
    githubIcon: 'images/ic-github.svg',
    liveIcon: 'images/ic-live.svg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    sourceLink: 'https://github.com/ginabeki/awesome-books-es6',
    liveLink: 'https://ginabeki.github.io/awesome-books-es6/',
    previousArrow: 'Previous project',
    nextArrow: 'Next project',
  },
  {
    name: 'To Do List',
    projectDescription:
      'A simple To-Do List built to keep track of tasks that need to be done. Built with JavaScript, CSS, HTML, & Webpack',
    image: 'images/todo.png',
    githubIcon: 'images/ic-github.svg',
    liveIcon: 'images/ic-live.svg',
    technologies: ['Webpack', 'HTML/CSS', 'JavaScript'],
    sourceLink: 'https://github.com/ginabeki/to-do-list',
    liveLink: 'https://ginabeki.github.io/to-do-list/',
    previousArrow: 'Previous project',
    nextArrow: 'Next project',
  },
  {
    name: 'Landing Page',
    projectDescription:
      'A simple landing page for Sunnyside company.',
    image: 'images/landing.png',
    githubIcon: 'images/ic-github.svg',
    liveIcon: 'images/ic-live.svg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    sourceLink: 'https://github.com/ginabeki/sunnyside-agency-landing-page',
    liveLink: 'https://ginabeki.github.io/sunnyside-agency-landing-page/',
    previousArrow: 'Previous project',
    nextArrow: 'Next project',
  },
  {
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
  },
  {
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
  },
];

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
