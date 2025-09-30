const shareTrigger = document.querySelector('.share-trigger');
const shareMenu = document.getElementById('share-menu');

shareTrigger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents the document click from firing
  shareMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!shareMenu.contains(e.target) && !shareTrigger.contains(e.target)) {
    shareMenu.classList.remove('active');
  }
});