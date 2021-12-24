/* eslint-disable prefer-destructuring */
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modalTitle');
const languageOne = document.querySelector('#languageOne');
const languageTwo = document.querySelector('#languageTwo');
const languageThree = document.querySelector('#languageThree');
const picture = document.querySelector('#picture');
const modalDescription = document.querySelector('#modalDescription');
const modalDemo = document.querySelector('#modalDemo');
const modalSource = document.querySelector('#modalSource');

modal.style.display = 'none';

const projects = [
  {
    id: 0,
    title: 'Alien Invasion',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project1.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://tictactoe-game-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    id: 1,
    title: 'Pomodoro Clock',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project2.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project3.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://weather-app-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    id: 3,
    title: 'Calculator',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project4.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    id: 4,
    title: 'Tic Tac Toe',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project5.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://tictactoe-game-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    id: 5,
    title: 'Pomodoro Clock',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '..//images/project6.png',
    languages: ['html', 'css', 'javascript'],
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
    modalDemo.innerText = projects[i].demo;
    modalSource.innerText = projects[i].source;
  });
};

for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
  <img src=${projects[i].picture} alt=${projects[i].title} class="cardPicture" >
  <div class="cardContent">
  <h3 class="cardTitle">${projects[i].title}</h3>
  <ul class="cardLanguages">
    <li class=cardBadges>${projects[i].languages[0]}</li>
    <li class=cardBadges>${projects[i].languages[1]}</li>
    <li class=cardBadges>${projects[i].languages[2]}</li>
  </ul>
  <button type=button class="btn4" id="${projects[i].id}">See project</button>
  </div>`;
  document.getElementById('portfolio').appendChild(card);
  createModal(i);
}

const closeModal = document.getElementById('closeBtn');
closeModal.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.remove();
});