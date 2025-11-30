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

// const welcome_slider = document.querySelector('.welcome-container');
// const welcome_slider_img = document.querySelector()
// const welcome_slider_bullet = document.querySelectorAll('.welcome-slider-item');
// const checked_welcome_slider_bullet = document.querySelector('.checked');

// welcome_slider_bullet.addEventListener('click', function(e){
//   for (var i = 0; i < welcome_slider_bullet.length; i++){
//     if (e.target == welcome_slider_bullet[i]){
//       welcome_slider_bullet[i].classList.toggle('checked');
//       checked_welcome_slider_bullet.classList.toggle('checked');
      
//     }
//   }
// })

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


var ticket_price = 20;
const tickets_count_btn = document.getElementsByClassName('tickets-count-btn');
const ticket_type_btn = document.getElementsByClassName('ticket-type-button');
var ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
var ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);

for (let i = 0; i<tickets_count_btn.length; i++){
  tickets_count_btn[i].addEventListener('click', function() {
    ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
    ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);
    document.getElementById('tickets-price').innerHTML = (ticket_input_1 + ticket_input_2 / 2) * ticket_price;
})}

for (let i = 0; i < ticket_type_btn.length; i++){
  ticket_type_btn[i].addEventListener('click', function(){
    const tickets_radio_btn_1 = document.getElementById('radio-1').checked;
    const tickets_radio_btn_2 = document.getElementById('radio-2').checked;
    const tickets_radio_btn_3 = document.getElementById('radio-3').checked;
    if (tickets_radio_btn_2){
      ticket_price = 25;
    }
    else if (tickets_radio_btn_3){
      ticket_price = 40
    }
    else if (tickets_radio_btn_1){
      ticket_price = 20
    }

    document.getElementById('tickets-price').innerHTML = (ticket_input_1 + ticket_input_2 / 2) * ticket_price;
  })
}

// ticket_count_btn.onclick = function() {
//   var ticket_price = 20;
//   tickets_final_price.innerHTML = (ticket_input_1 + ticket_input_2 / 2) * ticket_price;
// }


