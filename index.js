let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let passes = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    passes += 1
    let countStr = "Проход " + passes + ":  " + count + " чел. "
    saveEl.innerHTML += countStr + "<br>"
    countEl.textContent = 0
    count = 0
}
