let homeBtn = document.getElementById('homebtn')
homeBtn.addEventListener('click', homeFunction)
function homeFunction() {
    window.scrollTo(0,0)
}
let aboutBtn = document.getElementById('aboutbtn')
aboutBtn.addEventListener('click', aboutFunction)
function aboutFunction() {
    window.scrollTo(0, 500)
}
let startBtn = document.getElementById('startbtn')
startBtn.addEventListener('click', startFunction)
function startFunction() {
    window.scrollTo(0, 2110)
}