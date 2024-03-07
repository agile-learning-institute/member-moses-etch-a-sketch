const container = document.querySelector('.container');

for (let i = 0; i < 100; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'square');
    container.appendChild(newDiv)
}

