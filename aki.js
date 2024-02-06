// Sa pictures
const imageUrls = [
    'img/sad.jpg',
    'img/saddd.png',
    
  ];

  function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }

// Sa nalayong button

function getRandomPosition() {
  const maxX = Math.floor(Math.random() * document.getElementById('nah').offsetWidth - 200) + 400; 
  const maxY = Math.floor(Math.random() * document.getElementById('nah').offsetHeight- 200) + 400; 
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  return { x: randomX, y: randomY };
}

function handleHover() {
    const imageContainer = document.getElementById('imageContainer');
    const randomImageElement = document.createElement('img');
    randomImageElement.className = 'random-image';
    randomImageElement.src = getRandomImageUrl();


    randomImageElement.style.position = 'absolute';
    randomImageElement.style.left = `${Math.random() * window.innerWidth}px`;
    randomImageElement.style.top = `${Math.random() * window.innerHeight}px`;

    imageContainer.appendChild(randomImageElement);

    randomImageElement.style.display = 'block';

    const randomPosition = getRandomPosition();
    this.style.transform = `translate(${randomPosition.x}px, ${randomPosition.y}px)`;

  
}

const button = document.getElementById('nah');

button.addEventListener('mouseenter', handleHover);

function verifyName() {

  const imageContainer = document.getElementById('imageContainer');
    const randomImageElement = document.createElement('img');
    randomImageElement.className = 'random-image';
    randomImageElement.src = getRandomImageUrl();


    randomImageElement.style.position = 'absolute';
    randomImageElement.style.left = `${Math.random() * window.innerWidth}px`;
    randomImageElement.style.top = `${Math.random() * window.innerHeight}px`;

    imageContainer.appendChild(randomImageElement);

    randomImageElement.style.display = 'block';

    const randomPosition = getRandomPosition();
    this.style.transform = `translate(${randomPosition.x}px, ${randomPosition.y}px)`;
  
  
  }

  function yes() {
    window.location.href = 'batinaplease.html';

    
    
    }




