// pega a div
let area = document.querySelector('#relogio')

setInterval(function() {
    // pega as horas
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if (String(hour).length == 1) {
        hour = `0${hour}`
    }

    if (String(minute).length == 1) {
        minute = `0${minute}`
    } 

    if (String(second).length == 1) {
        second = `0${second}`
    }

    area.innerHTML = `${hour}:${minute}:${second}` 
}, 1000)
