let doze = document.querySelector('#form12')
let vintqua = document.querySelector('#form24')

doze.addEventListener('click', () => {
    if (doze.checked) {
        console.log('doze')
    }
})

vintqua.addEventListener('click', () => {
    if (vintqua.checked) {
        console.log('vintqua')
    }
})



// pega a div
let area = document.querySelector('#relogio')

setInterval(function() {
    // pega as horas
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    // am am
    let daynight

    if (hour >= 12) {
        daynight = 'pm'
    } else {
        daynight = 'am'
    }

    // formato 12
    if (hour > 12) {
        hour -= 12
    }

    // add zero
    if (String(hour).length == 1) {
        hour = `0${hour}`
    }

    if (String(minute).length == 1) {
        minute = `0${minute}`
    } 

    if (String(second).length == 1) {
        second = `0${second}`
    }

    // inner
    area.innerHTML = `${hour}:${minute}:${second}${daynight}` 
}, 1000)
