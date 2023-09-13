const orbitContainer = document.querySelector('.orbit-container');

const orbitContentData = [
  {
    imageSrc: './img/test.png',
    title: 'Circle 1',
    description: 'This is the description for Circle 1.',
  },
  {
    imageSrc: './img/test.png',
    title: 'Circle 2',
    description: 'This is the description for Circle 2.',
  },,
  {
    imageSrc: './img/test.png',
    title: 'Circle 3',
    description: 'This is the description for Circle 2.',
  },,
  {
    imageSrc: './img/test.png',
    title: 'Circle 4',
    description: 'This is the description for Circle 2.',
  },,
  {
    imageSrc: './img/test.png',
    title: 'Circle 5',
    description: 'This is the description for Circle 2.',
  },
  // Add more objects as needed
];

function createOrbitContentElements(data, radius) {
  for (let i = 0; i < data.length; i++) {
    const orbitContent = document.createElement('div');
    orbitContent.classList.add('orbit-content');
    orbitContainer.appendChild(orbitContent);

    const angle = (360 / data.length) * i;
    
    const x = Math.cos(toRadians(angle)) * radius;
    const y = Math.sin(toRadians(angle)) * radius;

    orbitContent.style.transform = `translate(${x}px, ${y}px)`;

    const image = document.createElement('img');
    image.src = data[i].imageSrc;
    orbitContent.appendChild(image);

    const title = document.createElement('h4');
    title.textContent = data[i].title;
    orbitContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = data[i].description;
    orbitContent.appendChild(description);
  }
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateRadius() {
  const viewportWidth = window.innerWidth;
  const radius = viewportWidth * 0.3; // Adjust the factor (0.3) as needed

  return radius;
}

function updateOrbitRadius() {
  const radius = calculateRadius();
  
  // Remove existing orbit content elements
  const orbitContents = orbitContainer.querySelectorAll('.orbit-content');
  orbitContents.forEach(content => content.remove());

  // Create new orbit content elements with updated radius
  createOrbitContentElements(orbitContentData, radius);
}

// Call the updateOrbitRadius function initially
updateOrbitRadius();

// Call the updateOrbitRadius function on window resize
window.addEventListener('resize', updateOrbitRadius);
