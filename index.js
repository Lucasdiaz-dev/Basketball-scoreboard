let scoreh = 0
let scoreg = 0
let scoreGuest = document.getElementById("points-guest");

let scoreHome = document.getElementById("points-home")

function incrementh1() {
    scoreh += 1
    scoreHome.textContent = scoreh
}

function incrementh2() {
    scoreh += 2
    scoreHome.textContent = scoreh
}

function incrementh3() {
    scoreh += 3
    scoreHome.textContent = scoreh
}

function incrementg1() {
    scoreg += 1
    scoreGuest.textContent = scoreg
}

function incrementg2() {
    scoreg += 2
    scoreGuest.textContent = scoreg
}

function incrementg3() {
    scoreg += 3
    scoreGuest.textContent = scoreg
}

function reset() {
    scoreg = 0
    scoreh = 0
    scoreGuest.textContent = scoreg
    scoreHome.textContent = scoreh
}