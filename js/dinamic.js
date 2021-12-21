// Objects

const First = {
  title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project1.png', languages: ['html', 'css', 'javascript'], demo: 'https://tictactoe-game-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
const Second = {
  title: 'Pomodoro Clock', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project2.png', languages: ['html', 'css', 'javascript'], demo: 'https://pomodoro-clock-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
const Third = {
  title: 'Weather App', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project3.png', languages: ['html', 'css', 'javascript'], demo: 'https://weather-app-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
const Fourth = {
  title: 'Calculator', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project4.png', languages: ['html', 'css', 'javascript'], demo: 'https://pomodoro-clock-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
const Fifth = {
  title: 'Tic Tac Toe', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project5.png', languages: ['html', 'css', 'javascript'], demo: 'https://tictactoe-game-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
const Sixth = {
  title: 'Pomodoro Clock', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero nostrum placeat corporis eum rem culpa perspiciatis. Autem natus minima rem, fugiat consequatur illo pariatur itaque hic porro eligendi dignissimos.', picture: '/images/project6.png', languages: ['html', 'css', 'javascript'], demo: 'https://pomodoro-clock-jr.herokuapp.com/', source: 'https://www.github.com/sergiogval',
};
// Array of objects
const projects = [First, Second, Third, Fourth, Fifth, Sixth];
const arr = projects.length;
const div = document.createElement('div');
// create a function to show projects
Document.onload = (projects) => {
  for (let i = 0; i < arr; i += 1) {
    div.classList.add('card');
    div.classList.add('card-image');
    div.classList.add('card-content');
    div.classList.add('card');
    div.innerHTML = `
      <div class="card-image">
        <img src="${projects[i].picture}" alt="project">
      </div>
      <div class="card-content">
        <h3 class="title">${projects[i].title}</h3>
        <p class="description">${projects[i].description}</p>
      </div>
      <div class="card-footer">
        <div class="languages">
          <p class="language">${projects[i].languages[0]}</p>
          <p class="language">${projects[i].languages[1]}</p>
          <p class="language">${projects[i].languages[2]}</p>
        </div>
        <div class="buttons">
          <a href="${projects[i].demo}" target="_blank" class="button">Demo</a>
          <a href="${projects[i].source}" target="_blank" class="button">Source</a>
        </div>
      </div>
    `;
  }
  document.getElementById('projects').appendChild(div);
};