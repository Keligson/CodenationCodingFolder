function number(channel) {
    console.log(`testtttt`)
}

let timer = (number, 1000, `Dev Dreamer`);

const clear = () => {
    clearInterval(timer)
    console.log(`clearTimeout() stopped the timer`);
}

const btn = document.getElementById(`btn`).addEventListener(`click`, clear);