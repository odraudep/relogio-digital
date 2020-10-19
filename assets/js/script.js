// input radio
let doze = document.querySelector('#form12')

// loop
setInterval(function() {
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

    // 12 ou 24
    if (doze.checked) {
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
    } else {
        area.innerHTML = `${hour}:${minute}:${second}`
    }  
}, 1000)
