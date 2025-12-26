const date = document.querySelector('#date')
const time = document.querySelector('#time')
const type = document.querySelector('#type')
const date_p = document.querySelector('.date-container p')
const time_p = document.querySelector('.time-container p')
const type_p = document.querySelector('.type-container p')

date.addEventListener('input', function(){
    date_p.innerHTML = this.value
})

time.addEventListener('input', function(){
    time_p.innerHTML = this.value
})

type.addEventListener('input', function(){
    type_p.innerHTML = this.value
})