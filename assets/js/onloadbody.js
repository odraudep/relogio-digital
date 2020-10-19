// pega a div
let area = document.querySelector('#relogio')

// onload do body
function relogio12() {
    // pega as horas
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    // add zero
    if (String(minute).length == 1) {
        minute = `0${minute}`
    } 

    if (String(second).length == 1) {
        second = `0${second}`
    }

    // am pm
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
    
    area.innerHTML = `${hour}:${minute}:${second}${daynight}`    
}