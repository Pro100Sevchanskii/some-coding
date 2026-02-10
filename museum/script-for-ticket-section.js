// var ticket_price = 20;
// const tickets_count_btn = document.getElementsByClassName('tickets-count-btn');
// const ticket_type_btn = document.getElementsByClassName('ticket-type-button');
// var ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
// var ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);

// for (let i = 0; i<tickets_count_btn.length; i++){
//   tickets_count_btn[i].addEventListener('click', function() {
//     ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
//     ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);
//     document.getElementById('tickets-price').innerHTML = `Total € ${(ticket_input_1 + ticket_input_2 / 2) * ticket_price}`;
// })}

// for (let i = 0; i < ticket_type_btn.length; i++){
//   ticket_type_btn[i].addEventListener('click', function(){
//     const tickets_radio_btn_1 = document.getElementById('radio-1').checked;
//     const tickets_radio_btn_2 = document.getElementById('radio-2').checked;
//     const tickets_radio_btn_3 = document.getElementById('radio-3').checked;
//     if (tickets_radio_btn_2){
//       ticket_price = 25;
//     }
//     else if (tickets_radio_btn_3){
//       ticket_price = 40
//     }
//     else if (tickets_radio_btn_1){
//       ticket_price = 20
//     }

//     document.getElementById('tickets-price').innerHTML =`Total € ${(ticket_input_1 + ticket_input_2 / 2) * ticket_price}` ;
//   })
// }

const tickets_count_inputs_amount = document.querySelectorAll('.amount .number-ticket')
const tickets_count_inputs_form = document.querySelectorAll('.booking-price-container .number-ticket')
const ticket_count_btns_amount = document.querySelectorAll('.amount .tickets-count-btn')
const ticket_count_btns_form = document.querySelectorAll('.booking-price-container .tickets-count-btn')
const ticket_count_btns = [ticket_count_btns_amount, ticket_count_btns_form]
var ticket_price = 20;
var input_18 = parseInt(tickets_count_inputs_amount[0].value)
var input_65 = parseInt(tickets_count_inputs_amount[1].value)

ticket_count_btns.forEach((btns, index) =>{
    btns.forEach(btn =>{
        btn.addEventListener('click', function(){
            if( index == 0){
                for(let i = 0; i< tickets_count_inputs_amount.length; i++){
                    tickets_count_inputs_form[i].value=tickets_count_inputs_amount[i].value
                }
            }
            else{
                for(let i = 0; i< tickets_count_inputs_form.length; i++){
                    tickets_count_inputs_amount[i].value=tickets_count_inputs_form[i].value
                }
            }

            input_18 = parseInt(tickets_count_inputs_amount[0].value)
            input_65 = parseInt(tickets_count_inputs_amount[1].value)

            

            
            
            document.getElementById('tickets-price').innerHTML =`Total € ${(input_18 + input_65 / 2) * ticket_price}`
            document.querySelectorAll('.booking-price-container .tickets-btn-container p')[0].innerHTML = `Basic 18+ (${ticket_price} €)`
            document.querySelectorAll('.booking-price-container .tickets-btn-container p')[1].innerHTML = `Senior 65+ (${ticket_price/2} €)`
            document.querySelector('.count-basic').innerHTML = input_18
            document.querySelectorAll('.tickets-count-basic p')[1].innerHTML = `Basic (${ticket_price} €)`
            document.querySelector('.count-senior').innerHTML = input_65
            document.querySelectorAll('.tickets-count-senior p')[1].innerHTML = `Senior (${ticket_price/2} €)`
            document.querySelector('.total-price-basic').innerHTML = `${ticket_price * input_18} €`
            document.querySelector('.total-price-senior').innerHTML = `${ticket_price * input_65/2} €`
            document.querySelector('.total-tickets-price').innerHTML = `${ticket_price * (input_18+ input_65/2)} €`
        })   
    })
    
})
// const tickets_count_inputs = [tickets_count_input, tickets_count_input_form]

// tickets_count_inputs.forEach((inputs, index) =>{
//     inputs.forEach((changed_input, changed_index) =>{
//         changed_input.addEventListener('change', function(){
//             if(index == 0){
//                 tickets_count_input_form[changed_index].value = changed_input.value
//             }
//             else{
//                 tickets_count_input[changed_index].value = changed_input.value
//             }
//         })
//     })
    
// })



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
    types.forEach(radio =>{
        if (radio.value == this.value) radio.checked = true
    })
    types.forEach((radio, index) =>{
        if(radio.checked){
            if(index == 1){
                ticket_price = 25;
            }
            else if(index == 2){
                ticket_price = 40;
            }
            else{
                ticket_price = 20
            }
        }
    })
    document.getElementById('tickets-price').innerHTML =`Total € ${(input_18 + input_65 / 2) * ticket_price}`
    document.querySelectorAll('.booking-price-container .tickets-btn-container p')[0].innerHTML = `Basic 18+ (${ticket_price} €)`
    document.querySelectorAll('.booking-price-container .tickets-btn-container p')[1].innerHTML = `Senior 65+ (${ticket_price/2} €)`
    document.querySelector('.count-basic').innerHTML = input_18
    document.querySelectorAll('.tickets-count-basic p')[1].innerHTML = `Basic (${ticket_price} €)`
    document.querySelector('.count-senior').innerHTML = input_65
    document.querySelectorAll('.tickets-count-senior p')[1].innerHTML = `Senior (${ticket_price/2} €)`
    document.querySelector('.total-price-basic').innerHTML = `${ticket_price * input_18} €`
    document.querySelector('.total-price-senior').innerHTML = `${ticket_price * input_65/2} €`
    document.querySelector('.total-tickets-price').innerHTML = `${ticket_price * (input_18+ input_65/2)} €`
})

const types = document.querySelectorAll('input[name="radio"')
types.forEach((radio, index) => {
    radio.addEventListener('change', function(){
        type.value = radio.value
        type_p.innerHTML = type.value
        if(index == 1){
            ticket_price = 25;
        }
        else if(index == 2){
            ticket_price = 40;
        }
        else{
            ticket_price = 20
        }
        document.getElementById('tickets-price').innerHTML =`Total € ${(input_18 + input_65 / 2) * ticket_price}`
        document.querySelectorAll('.booking-price-container .tickets-btn-container p')[0].innerHTML = `Basic 18+ (${ticket_price} €)`
        document.querySelectorAll('.booking-price-container .tickets-btn-container p')[1].innerHTML = `Senior 65+ (${ticket_price/2} €)`
        document.querySelector('.count-basic').innerHTML = input_18
        document.querySelectorAll('.tickets-count-basic p')[1].innerHTML = `Basic (${ticket_price} €)`
        document.querySelector('.count-senior').innerHTML = input_65
        document.querySelectorAll('.tickets-count-senior p')[1].innerHTML = `Senior (${ticket_price/2} €)`
        document.querySelector('.total-price-basic').innerHTML = `${ticket_price * input_18} €`
        document.querySelector('.total-price-senior').innerHTML = `${ticket_price * input_65/2} €`
        document.querySelector('.total-tickets-price').innerHTML = `${ticket_price * (input_18+ input_65/2)} €`
    })

    
})



// var ticket_price = 20;
// const tickets_count_btn = document.getElementsByClassName('tickets-count-btn');
// const ticket_type_btn = document.getElementsByClassName('ticket-type-button');
// var ticket_input_1 = parseInt(document.getElementById('number-ticket-18').value);
// var ticket_input_2 = parseInt(document.getElementById('number-ticket-65').value);