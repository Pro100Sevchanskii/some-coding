const burger_menu = document.querySelector('.burger-nav')
const adaptive_menu = document.querySelector('.adaptive-menu-container')
const welcome_content = document.querySelector('.welcome-content')

burger_menu.addEventListener('click', function(e) {
  e.stopPropagation();
  adaptive_menu.classList.toggle("open");
  this.classList.toggle('active');
  welcome_content.classList.toggle("open");
})

adaptive_menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    adaptive_menu.classList.remove("open");
    burger_menu.classList.remove('active');
    welcome_content.classList.remove("open");
  });
});

window.onclick = function(e){
  if (e.target != burger_menu && !adaptive_menu.contains(e.target)){
    adaptive_menu.classList.remove("open");
    burger_menu.classList.remove('active');
    welcome_content.classList.remove("open");
  } 
}

const welcome_slider = document.querySelector('.welcome-container');
const welcome_slider_img = document.querySelector()
const welcome_slider_bullet = document.querySelectorAll('.welcome-slider-item');
const checked_welcome_slider_bullet = document.querySelector('.checked');

welcome_slider_bullet.addEventListener('click', function(e){
  for (var i = 0; i < welcome_slider_bullet.length; i++){
    if (e.target == welcome_slider_bullet[i]){
      welcome_slider_bullet[i].classList.toggle('checked');
      checked_welcome_slider_bullet.classList.toggle('checked');
      
    }
  }
})

const progress_video = document.querySelector('.progress-video');
const progress_volume = document.querySelector('.progress-volume');

progress_video.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

progress_volume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})