document.addEventListener("DOMContentLoaded" ,() => {
  const tab = document.querySelector('.info');
  const clip = document.querySelector('.clip');
  
  clip.addEventListener('click', () => {
    tab.classList.toggle('info__open')
  });
});



