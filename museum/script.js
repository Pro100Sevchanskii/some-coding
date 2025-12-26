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




var ticket_price = 20;
const tickets_count_btn = document.getElementsByClassName('tickets-count-btn');
const ticket_type_btn = document.getElementsByClassName('ticket-type-button');
var ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
var ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);

for (let i = 0; i<tickets_count_btn.length; i++){
  tickets_count_btn[i].addEventListener('click', function() {
    ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
    ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);
    document.getElementById('tickets-price').innerHTML = `Total € ${(ticket_input_1 + ticket_input_2 / 2) * ticket_price}`;
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

    document.getElementById('tickets-price').innerHTML =`Total € ${(ticket_input_1 + ticket_input_2 / 2) * ticket_price}` ;
  })
}

// ticket_count_btn.onclick = function() {
//   var ticket_price = 20;
//   tickets_final_price.innerHTML = (ticket_input_1 + ticket_input_2 / 2) * ticket_price;
// }

const video = document.getElementById('main-video')
const pause_btn = document.getElementsByClassName('pause-btn')
const volume_btn = document.querySelector('.volume-btn')
const fullscreen_btn = document.querySelector('.full-screen-btn')
const progress_video = document.querySelector('.progress-video');
const progress_volume = document.querySelector('.progress-volume');


progress_video.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

progress_video.addEventListener('change', function(){
  video.currentTime = (progress_video.value * video.duration) / 100
})

video.volume = progress_volume.value/100
var progress_volume_value = progress_volume.value
progress_volume.addEventListener('input', function () {

  const value = this.value;
  progress_volume_value = this.value
  
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  video.volume = value /100

  if (value==0){
    volume_btn.innerHTML = '<svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_19)"><path d="M32.2053 15L35.6703 11.535C35.8901 11.3152 36 11.0474 36 10.7337C36 10.4199 35.8901 10.1522 35.6703 9.93234L34.0677 8.32972C33.8478 8.10991 33.5801 8 33.2663 8C32.9526 8 32.6848 8.10991 32.465 8.32972L29 11.7947L25.535 8.32972C25.3152 8.10991 25.0474 8 24.7337 8C24.4199 8 24.1522 8.10991 23.9323 8.32972L22.3297 9.93234C22.1099 10.1522 22 10.4199 22 10.7337C22 11.0474 22.1099 11.3152 22.3297 11.535L25.7947 15L22.3297 18.465C22.1099 18.6848 22 18.9526 22 19.2663C22 19.5801 22.1099 19.8478 22.3297 20.0677L23.9323 21.6703C24.1522 21.8901 24.4199 22 24.7337 22C25.0474 22 25.3152 21.8901 25.535 21.6703L29 18.2053L32.465 21.6703C32.6848 21.8901 32.9516 22 33.2663 22C33.5811 22 33.8478 21.8901 34.0677 21.6703L35.6703 20.0677C35.8901 19.8478 36 19.5801 36 19.2663C36 18.9526 35.8901 18.6848 35.6703 18.465L32.2053 15Z" fill="#B3B3B3"/><path d="M18.3326 0C17.8816 0 17.4905 0.156374 17.1604 0.469123L8.48928 8.68426H1.66737C1.21531 8.68426 0.825273 8.84064 0.495164 9.15339C0.165055 9.46614 0 9.83665 0 10.2639V19.7361C0 20.1633 0.165055 20.5339 0.495164 20.8466C0.825273 21.1594 1.21636 21.3157 1.66737 21.3157H8.48928L17.1604 29.5309C17.4905 29.8436 17.8806 30 18.3326 30C18.7847 30 19.1747 29.8436 19.5048 29.5309C19.8349 29.2181 20 28.8486 20 28.4203V1.57968C20 1.15239 19.8349 0.781873 19.5059 0.469123C19.1768 0.156374 18.7857 0 18.3337 0H18.3326Z" fill="#B3B3B3"/></g><defs><clipPath id="clip0_1_19"><rect width="36" height="30" fill="white"/></clipPath></defs></svg>'
  }
  else{
    if(video.muted){
      video.muted = false
    }
    volume_btn.innerHTML = `<svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_25_108)">
                                <path d="M19.3511 0C18.875 0 18.4622 0.161587 18.1138 0.484761L8.9609 8.97374H1.76C1.28282 8.97374 0.871122 9.13533 0.522673 9.4585C0.174224 9.78167 0 10.1645 0 10.6061V20.3939C0 20.8355 0.174224 21.2183 0.522673 21.5415C0.871122 21.8647 1.28393 22.0263 1.76 22.0263H8.9609L18.1138 30.5152C18.4622 30.8384 18.8739 31 19.3511 31C19.8283 31 20.24 30.8384 20.5884 30.5152C20.9369 30.1921 21.1111 29.8102 21.1111 29.3677V1.63234C21.1111 1.1908 20.9369 0.807935 20.5895 0.484761C20.2422 0.161587 19.8294 0 19.3522 0H19.3511Z" fill="#B3B3B3"/>
                                <path d="M29.5979 19.1322C30.3389 18.0151 30.7094 16.8082 30.7094 15.5103C30.7094 14.2125 30.3389 13.0014 29.5979 11.8751C28.8569 10.7487 27.8774 9.95512 26.6561 9.49425C26.4819 9.40952 26.2634 9.36612 26.0027 9.36612C25.5499 9.36612 25.1572 9.52422 24.8258 9.83939C24.4943 10.1566 24.3286 10.5431 24.3286 11.004C24.3286 11.3625 24.4331 11.6653 24.6432 11.9123C24.8532 12.1592 25.1044 12.3731 25.4011 12.5519C25.6966 12.7307 25.9932 12.927 26.2898 13.1409C26.5864 13.3548 26.8387 13.6565 27.0477 14.0492C27.2567 14.4419 27.3612 14.9286 27.3612 15.5083C27.3612 16.088 27.2567 16.5747 27.0477 16.9673C26.8387 17.36 26.5864 17.6628 26.2898 17.8756C25.9932 18.0885 25.6966 18.2859 25.4011 18.4646C25.1044 18.6434 24.8522 18.8573 24.6432 19.1043C24.4342 19.3512 24.3286 19.655 24.3286 20.0126C24.3286 20.4734 24.4954 20.8609 24.8258 21.1771C25.1572 21.4913 25.5488 21.6514 26.0027 21.6514C26.2634 21.6514 26.4819 21.6091 26.6561 21.5233C27.8763 21.0449 28.8569 20.2471 29.5979 19.1291V19.1322Z" fill="#B3B3B3"/>
                                <path d="M35.7563 22.8582C37.252 20.6112 37.9999 18.1571 37.9999 15.499C37.9999 12.8419 37.252 10.3899 35.7563 8.13971C34.2605 5.89271 32.2811 4.25452 29.819 3.23039C29.591 3.14417 29.362 3.10001 29.1329 3.10001C28.6759 3.10001 28.2796 3.26509 27.9451 3.59525C27.6105 3.92541 27.4443 4.31551 27.4443 4.76764C27.4443 5.44479 27.7874 5.95685 28.4735 6.30489C29.4579 6.80855 30.1269 7.19023 30.4785 7.45099C31.7803 8.38891 32.7967 9.56445 33.5265 10.9797C34.2562 12.395 34.6216 13.9007 34.6216 15.5C34.6216 17.0972 34.2562 18.6039 33.5265 20.0203C32.7967 21.4356 31.7803 22.6111 30.4785 23.549C30.1269 23.8098 29.4579 24.1915 28.4735 24.6951C27.7874 25.0432 27.4443 25.5542 27.4443 26.2324C27.4443 26.6835 27.6116 27.0746 27.9451 27.4048C28.2785 27.7349 28.6833 27.9 29.1585 27.9C29.3694 27.9 29.59 27.8558 29.818 27.7696C32.28 26.7444 34.2605 25.1084 35.7552 22.8593L35.7563 22.8582Z" fill="#B3B3B3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_25_108">
                                    <rect width="38" height="31" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>`
  }
  
})



volume_btn.addEventListener('click', function(){
  
  if(video.muted){
    this.innerHTML = `<svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_25_108)">
                                <path d="M19.3511 0C18.875 0 18.4622 0.161587 18.1138 0.484761L8.9609 8.97374H1.76C1.28282 8.97374 0.871122 9.13533 0.522673 9.4585C0.174224 9.78167 0 10.1645 0 10.6061V20.3939C0 20.8355 0.174224 21.2183 0.522673 21.5415C0.871122 21.8647 1.28393 22.0263 1.76 22.0263H8.9609L18.1138 30.5152C18.4622 30.8384 18.8739 31 19.3511 31C19.8283 31 20.24 30.8384 20.5884 30.5152C20.9369 30.1921 21.1111 29.8102 21.1111 29.3677V1.63234C21.1111 1.1908 20.9369 0.807935 20.5895 0.484761C20.2422 0.161587 19.8294 0 19.3522 0H19.3511Z" fill="#B3B3B3"/>
                                <path d="M29.5979 19.1322C30.3389 18.0151 30.7094 16.8082 30.7094 15.5103C30.7094 14.2125 30.3389 13.0014 29.5979 11.8751C28.8569 10.7487 27.8774 9.95512 26.6561 9.49425C26.4819 9.40952 26.2634 9.36612 26.0027 9.36612C25.5499 9.36612 25.1572 9.52422 24.8258 9.83939C24.4943 10.1566 24.3286 10.5431 24.3286 11.004C24.3286 11.3625 24.4331 11.6653 24.6432 11.9123C24.8532 12.1592 25.1044 12.3731 25.4011 12.5519C25.6966 12.7307 25.9932 12.927 26.2898 13.1409C26.5864 13.3548 26.8387 13.6565 27.0477 14.0492C27.2567 14.4419 27.3612 14.9286 27.3612 15.5083C27.3612 16.088 27.2567 16.5747 27.0477 16.9673C26.8387 17.36 26.5864 17.6628 26.2898 17.8756C25.9932 18.0885 25.6966 18.2859 25.4011 18.4646C25.1044 18.6434 24.8522 18.8573 24.6432 19.1043C24.4342 19.3512 24.3286 19.655 24.3286 20.0126C24.3286 20.4734 24.4954 20.8609 24.8258 21.1771C25.1572 21.4913 25.5488 21.6514 26.0027 21.6514C26.2634 21.6514 26.4819 21.6091 26.6561 21.5233C27.8763 21.0449 28.8569 20.2471 29.5979 19.1291V19.1322Z" fill="#B3B3B3"/>
                                <path d="M35.7563 22.8582C37.252 20.6112 37.9999 18.1571 37.9999 15.499C37.9999 12.8419 37.252 10.3899 35.7563 8.13971C34.2605 5.89271 32.2811 4.25452 29.819 3.23039C29.591 3.14417 29.362 3.10001 29.1329 3.10001C28.6759 3.10001 28.2796 3.26509 27.9451 3.59525C27.6105 3.92541 27.4443 4.31551 27.4443 4.76764C27.4443 5.44479 27.7874 5.95685 28.4735 6.30489C29.4579 6.80855 30.1269 7.19023 30.4785 7.45099C31.7803 8.38891 32.7967 9.56445 33.5265 10.9797C34.2562 12.395 34.6216 13.9007 34.6216 15.5C34.6216 17.0972 34.2562 18.6039 33.5265 20.0203C32.7967 21.4356 31.7803 22.6111 30.4785 23.549C30.1269 23.8098 29.4579 24.1915 28.4735 24.6951C27.7874 25.0432 27.4443 25.5542 27.4443 26.2324C27.4443 26.6835 27.6116 27.0746 27.9451 27.4048C28.2785 27.7349 28.6833 27.9 29.1585 27.9C29.3694 27.9 29.59 27.8558 29.818 27.7696C32.28 26.7444 34.2605 25.1084 35.7552 22.8593L35.7563 22.8582Z" fill="#B3B3B3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_25_108">
                                    <rect width="38" height="31" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>`
   progress_volume.value = progress_volume_value
   
  }
  else{
    progress_volume.value = 0
    this.innerHTML = '<svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_19)"><path d="M32.2053 15L35.6703 11.535C35.8901 11.3152 36 11.0474 36 10.7337C36 10.4199 35.8901 10.1522 35.6703 9.93234L34.0677 8.32972C33.8478 8.10991 33.5801 8 33.2663 8C32.9526 8 32.6848 8.10991 32.465 8.32972L29 11.7947L25.535 8.32972C25.3152 8.10991 25.0474 8 24.7337 8C24.4199 8 24.1522 8.10991 23.9323 8.32972L22.3297 9.93234C22.1099 10.1522 22 10.4199 22 10.7337C22 11.0474 22.1099 11.3152 22.3297 11.535L25.7947 15L22.3297 18.465C22.1099 18.6848 22 18.9526 22 19.2663C22 19.5801 22.1099 19.8478 22.3297 20.0677L23.9323 21.6703C24.1522 21.8901 24.4199 22 24.7337 22C25.0474 22 25.3152 21.8901 25.535 21.6703L29 18.2053L32.465 21.6703C32.6848 21.8901 32.9516 22 33.2663 22C33.5811 22 33.8478 21.8901 34.0677 21.6703L35.6703 20.0677C35.8901 19.8478 36 19.5801 36 19.2663C36 18.9526 35.8901 18.6848 35.6703 18.465L32.2053 15Z" fill="#B3B3B3"/><path d="M18.3326 0C17.8816 0 17.4905 0.156374 17.1604 0.469123L8.48928 8.68426H1.66737C1.21531 8.68426 0.825273 8.84064 0.495164 9.15339C0.165055 9.46614 0 9.83665 0 10.2639V19.7361C0 20.1633 0.165055 20.5339 0.495164 20.8466C0.825273 21.1594 1.21636 21.3157 1.66737 21.3157H8.48928L17.1604 29.5309C17.4905 29.8436 17.8806 30 18.3326 30C18.7847 30 19.1747 29.8436 19.5048 29.5309C19.8349 29.2181 20 28.8486 20 28.4203V1.57968C20 1.15239 19.8349 0.781873 19.5059 0.469123C19.1768 0.156374 18.7857 0 18.3337 0H18.3326Z" fill="#B3B3B3"/></g><defs><clipPath id="clip0_1_19"><rect width="36" height="30" fill="white"/></clipPath></defs></svg>'
  }
  video.muted = !video.muted
  progress_volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress_volume.value}%, #C4C4C4 ${progress_volume.value}%, #C4C4C4 100%)`
})



video.addEventListener('timeupdate', function(){
  progress_video.value = (video.currentTime / video.duration) * 100
  const value = progress_video.value;
  progress_video.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  if (value==100){
    pause_btn[0].innerHTML = '<svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 15.5053L0 0C0 23.3683 0 11.8996 0 31L23 15.5053Z" fill="#B3B3B3"/> </svg>'
  }
})

video.addEventListener('loadedmetadata', function(){
          progress_video.value = (video.currentTime / video.duration) * 100
          progress_video.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress_video.value}%, #C4C4C4 ${progress_video.value}%, #C4C4C4 100%)`
        })

video.addEventListener('click', function(){
  if (video.paused){
    video.play()
    pause_btn[0].innerHTML = '<svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_22)"> <path d="M8 29.0471V0.944802C8 0.421605 7.55026 0 6.98347 0H1.01653C0.449742 0 0 0.421605 0 0.944802V29.0471C0 29.5703 0.449742 30 1.01653 30H6.98347C7.55026 30 8 29.5784 8 29.0471Z" fill="#B3B3B3"/> <path d="M19.9835 0H14.0165C13.4584 0 13 0.421605 13 0.944802V29.0471C13 29.5703 13.4497 30 14.0165 30H19.9835C20.5416 30 21 29.5784 21 29.0471V0.944802C21 0.421605 20.5503 0 19.9835 0Z" fill="#B3B3B3"/> </g><defs> <clipPath id="clip0_1_22"> <rect width="21" height="30" fill="white"/> </clipPath> </defs> </svg>'

  }
  else{
    video.pause()
    pause_btn[0].innerHTML = '<svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 15.5053L0 0C0 23.3683 0 11.8996 0 31L23 15.5053Z" fill="#B3B3B3"/> </svg>'

  }

})

pause_btn[0].addEventListener('click', function(){
  if (video.paused){
    video.play()
    pause_btn[0].innerHTML = '<svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_22)"> <path d="M8 29.0471V0.944802C8 0.421605 7.55026 0 6.98347 0H1.01653C0.449742 0 0 0.421605 0 0.944802V29.0471C0 29.5703 0.449742 30 1.01653 30H6.98347C7.55026 30 8 29.5784 8 29.0471Z" fill="#B3B3B3"/> <path d="M19.9835 0H14.0165C13.4584 0 13 0.421605 13 0.944802V29.0471C13 29.5703 13.4497 30 14.0165 30H19.9835C20.5416 30 21 29.5784 21 29.0471V0.944802C21 0.421605 20.5503 0 19.9835 0Z" fill="#B3B3B3"/> </g><defs> <clipPath id="clip0_1_22"> <rect width="21" height="30" fill="white"/> </clipPath> </defs> </svg>'

  }
  else{
    video.pause()
    pause_btn[0].innerHTML = '<svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 15.5053L0 0C0 23.3683 0 11.8996 0 31L23 15.5053Z" fill="#B3B3B3"/> </svg>'
  }

})

fullscreen_btn.addEventListener('click', function(){
  if(!document.fullscreenElement){
     video.requestFullscreen().catch(err => {
            console.error(`Ошибка при запросе полноэкранного режима: ${err.message}`);
        });
  }
})

const video_slider = document.querySelector('.video-slider-inner');
const video_slider_next = document.querySelector('.next-btn');
const video_slider_before = document.querySelector('.before-btn');
const video_slider_controls = document.querySelectorAll('.slider-controls-item');
var position = -20.345;
video_slider_next.addEventListener('click', function(){
  position -= 20.345;
  for (let i = 0; i< video_slider_controls.length; i++){
    if(video_slider_controls[i].classList.contains('slider-controls-item-active')){
      if(i==4){
        video_slider_controls[i].classList.remove('slider-controls-item-active');
        video_slider_controls[0].classList.add('slider-controls-item-active');
        video.src = `./assets/video/video0.mp4`
      
        break
      }
      video_slider_controls[i].classList.remove('slider-controls-item-active');
      video_slider_controls[i+1].classList.add('slider-controls-item-active');
      video.src = `./assets/video/video${i+1}.mp4`
      
      
      break
    }
  }
  
  video_slider.style.transform = `translateX(${position}%)`
})

video_slider_before.addEventListener('click', function(){
  position += 20.345;
  
  for (let i = 4; i>= 0; i--){
    if(video_slider_controls[i].classList.contains('slider-controls-item-active')){
      if(i==0){
        video_slider_controls[i].classList.remove('slider-controls-item-active');
        video_slider_controls[4].classList.add('slider-controls-item-active');
        video.src = `./assets/video/video4.mp4`
       
        break
      }
      video_slider_controls[i].classList.remove('slider-controls-item-active');
      video_slider_controls[i-1].classList.add('slider-controls-item-active');
      video.src = `./assets/video/video${i-1}.mp4`
      
      break
    }
  }
  
  video_slider.style.transform = `translateX(${position}%)`
})



for (let i = 0; i< video_slider_controls.length; i++){
  video_slider_controls[i].addEventListener('click', function() {
    position = -20.345 * (i+1)

    video_slider.style.transform = `translateX(${position}%)`
    for (let j = 0; j< video_slider_controls.length; j++){
      if(video_slider_controls[j].classList.contains('slider-controls-item-active')){
        video_slider_controls[j].classList.remove('slider-controls-item-active');
        video_slider_controls[i].classList.add('slider-controls-item-active');
        video.src = `./assets/video/video${i}.mp4`
        
      }
    }
  })
}


const explore_slider = document.querySelector('.explore-slider');
const image_after_wrap = document.querySelector('.bottom-img-slider');
const image_after = document.querySelector('.bottom-img-slider img');
const explore_range_btn = document.querySelector('.explore-input-range');
var explore_slider_width = explore_slider.clientWidth;
let range_value = explore_range_btn.value;
image_after_wrap.style.width = `${range_value}%`;

image_after.style.width = explore_slider_width + 'px';
explore_range_btn.addEventListener('input', function(){
  let range_value = explore_range_btn.value;
  image_after_wrap.style.width = `${range_value}%`;
})

const gallery_columns = document.querySelectorAll('.gallery-column');
var gallery_items = [
  './assets/img/galery1.jpg',
  './assets/img/galery2.jpg',
  './assets/img/galery3.jpg',
  './assets/img/galery4.jpg',
  './assets/img/galery5.jpg',
  './assets/img/galery6.jpg',
  './assets/img/galery7.jpg',
  './assets/img/galery8.jpg',
  './assets/img/galery9.jpg',
  './assets/img/galery10.jpg',
  './assets/img/galery11.jpg',
  './assets/img/galery12.jpg',
  './assets/img/galery13.jpg',
  './assets/img/galery14.jpg',
  './assets/img/galery15.jpg'  
];
gallery_items.sort(() => Math.random() - 0.5);
window.onload = function(){
  for (let i = 0; i < gallery_columns.length; i++){
    for (let j = i*5; j < (i+1)*5; j++){
      const img = document.createElement('img');
      img.classList.add('gallery-item');
      img.src = gallery_items[j];
      img.alt = `gallery img ${j}`;
      gallery_columns[i].append(img);
    }
  }
  
  
}
