const daysCountdown = document.getElementById('countdown__day')
const hoursCountdown = document.getElementById('countdown__hours')
const minutesCountdown = document.getElementById('countdown__minutes')
const secondsCountdown = document.getElementById('countdown__seconds')

/* Final date */
const countdownDate = new Date('Jun 10, 2022 06:00:00').getTime()

setInterval(() => {
    /* Current date */
    const nowDate = new Date().getTime()

    /* Calculate differene */
    let diferenceDate = countdownDate - nowDate

    /* Convert */
    let days = Math.floor(diferenceDate / (1000 * 60 * 60 * 24))
    let hours = Math.floor((diferenceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((diferenceDate % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((diferenceDate % (1000 * 60)) / (1000))

    /* Show date */
    daysCountdown.innerText = days
    hoursCountdown.innerText = hours
    minutesCountdown.innerText = minutes
    secondsCountdown.innerText = ('0' + seconds).slice(-2)
}, 500);