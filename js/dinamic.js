/* eslint-disable prefer-destructuring */
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const languageOne = document.querySelector('#languageOne');
const languageTwo = document.querySelector('#languageTwo');
const languageThree = document.querySelector('#languageThree');
const picture = document.querySelector('#picture');
const modalDescription = document.querySelector('#modalDescription');
const modalDemo = document.querySelector('.modal-demo');
const modalSource = document.querySelector('.modal-source');
const closeModal = document.getElementById('closeBtn');

modal.style.display = 'none';
const projects = [
  {
    id: 0,
    title: 'Movie App',
    description: 'This is a great project. I used an API to a webserver and the call back is the info of the trending movies at the time. It also has a little review if you hover the movie poster, enjoy!',
    picture: '..//images/project4.png',
    languages: ['html/css', 'API', 'JavaScript'],
    demo: 'https://sergiogval.github.io/movies-app/',
    source: 'https://github.com/sergiogval/movies-app',
  },
  {
    id: 1,
    title: 'Conference page (mockup)',
    description: 'This project was made in order to show my skills to develop a page, taking a given look and feel. It is in part build dynamically using JS DOM manipulation.',
    picture: 'images/project2.png',
    languages: ['html/css', 'GIT', 'JavaScript'],
    demo: 'https://sergiogval.github.io/capstone-conference-page/',
    source: 'https://github.com/sergiogval/capstone-conference-page',
  },
  {
    id: 2,
    title: 'ToDo: list',
    description: 'This project allows to the user make a tasks to do list. It is created with bootstrap framwork. It has an easy and friendly interface',
    picture: '..//images/project3.png',
    languages: ['html/css', 'Bootstrap', 'JavaScript'],
    demo: 'https://sergiogval.github.io/TODO_listing/',
    source: 'https://github.com/sergiogval/TODO_listing',
  },
  {
    id: 3,
    title: 'Awesome Books',
    description: 'This project is a simple Single Page App (SPA) that was made using no frameworks. It allows the user to add and remove items, as well as storage them locally in order to avoid lose data.',
    picture: 'images/project1.png',
    languages: ['html/css', 'JavaScript', 'GIT'],
    demo: 'https://sergiogval.github.io/awesome-books/',
    source: 'https://github.com/sergiogval/awesome-books',
  },
  {
    id: 4,
    title: 'Drink water tracker',
    description: 'This project is just a tracker for the amount of water drunk during a given day. It was made with pure css and vanilla JS. It has a nice UI and an intuitive UX.',
    picture: '..//images/project5.png',
    languages: ['html', 'CSS', 'JavaScript'],
    demo: 'https://sergiogval.github.io/fluffy-engine/',
    https: 'https://github.com/sergiogval/fluffy-engine/',
  },
  {
    id: 5,
    title: 'Calculator',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project6.png',
    languages: ['html/css', 'Ruby on Rails', 'JavaScript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
];

const createModal = (i) => {
  document.getElementById(`${projects[i].id}`).addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.innerText = projects[i].title;
    languageOne.innerText = projects[i].languages[0];
    languageTwo.innerText = projects[i].languages[1];
    languageThree.innerText = projects[i].languages[2];
    picture.src = projects[i].picture;
    modalDescription.innerText = projects[i].description;
    modalDemo.href = projects[i].demo;
    modalSource.href = projects[i].source;
  });
};

for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = `card${projects[i].id}`;
  card.innerHTML = `
  <img src=${projects[i].picture} alt="${projects[i].title}" class="card-picture" >
  <div class="card-content">                                                                                                                                                                                                                                            
  <h3 class="card-title">${projects[i].title}</h3>
  <ul class="card-languages">
    <li class="card-badges">${projects[i].languages[0]}</li>
    <li class="card-badges">${projects[i].languages[1]}</li>
    <li class="card-badges">${projects[i].languages[2]}</li>
  </ul>
  <button type=button class="btn4" id="${projects[i].id}">See project</button>
  </div>`;
  document.getElementById('portfolio').appendChild(card);
  createModal(i);
}

closeModal.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
});