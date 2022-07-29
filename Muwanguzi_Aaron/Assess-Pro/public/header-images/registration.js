function assess(){
    let aaron = document.getElementById('first');
    if(aaron.value.length <= 3){
        aaron.textContent = "this field is required"
        aaron.style.border = '2px solid red'
    }
}
function birth(){
    let deal = document.getElementById('second')
    if(deal.value.length <= 3){
        deal.style.border = '2px solid red'
        deal.textContent = "select date of birth"
    }
}
function Resd(){
    let deal = document.getElementById('place')
    if(deal.value.length <= 3){
        deal.style.border = '2px solid red'
        deal.textContent = "select date of birth"
    }
}