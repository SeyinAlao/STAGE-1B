const timeElement = document.getElementById('epoch-time');
const customCursor = document.getElementById('cursor');
const interactiveElements = document.querySelectorAll('a, button');

function updateEpochTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateEpochTime();
setInterval(updateEpochTime, 1000); 

if (window.matchMedia("(pointer: fine)").matches) {
  
  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      customCursor.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      customCursor.classList.remove('hovering');
    });
  });
} else {r 
  customCursor.style.display = 'none';
  document.body.style.cursor = 'auto'; 
}