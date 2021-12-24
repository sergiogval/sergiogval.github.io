const projects = [
  {
    title: 'Alien Invasion',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project1.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://tictactoe-game-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    title: 'Pomodoro Clock',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project2.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    title: 'Weather App',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project3.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://weather-app-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    title: 'Calculator',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project4.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project5.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://tictactoe-game-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
  {
    title: 'Pomodoro Clock',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.',
    picture: '/images/project6.png',
    languages: ['html', 'css', 'javascript'],
    demo: 'https://pomodoro-clock-jr.herokuapp.com/',
    source: 'https://www.github.com/sergiogval',
  },
];

for (let i = 0; i <= projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
  <div>
  <img class="cardPicture" src="${projects[i].picture}">
  </div>
  <div class="cardContent">
  <h3 class="cardTitle">${projects[i].title}</h3>
  <ul class="cardLanguages">
    <li class=cardBadges>${projects[i].languages[0]}</li>
    <li class=cardBadges>${projects[i].languages[1]}</li>
    <li class=cardBadges>${projects[i].languages[2]}</li>
  </ul>
  <a type=button class="btn-4" href="#">See project</a>
  </div>
  </div>`;
  document.getElementById('portfolio').appendChild(card);
}
