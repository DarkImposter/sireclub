taskbutton = document.getElementById("taskButton")
closeButton = document.getElementById("closeButton")

function openTasks(){

    let taskZoneContainer = document.getElementById("taskZoneContainer")
    
    taskZoneContainer.classList.add("taskZoneOpen")
}
function closeTasks(){
     let taskZoneContainer = document.getElementById("taskZoneContainer")
    taskZoneContainer.classList.remove("taskZoneOpen")
    taskZoneContainer.classList.add("classZoneClose")
}
taskbutton.addEventListener("click", openTasks)
closeButton.addEventListener("click", closeTasks)
document.querySelectorAll(".button").forEach(function(btn) {
    btn.addEventListener("mousedown", function(b) {
        b.target.setAttribute('pressed',true);
    });
    btn.addEventListener("mouseup", function(b) {
        b.target.removeAttribute('pressed');
    });
});
let points = 200;

const bar = document.getElementById("pointBar")

bar.style.width = `${points}px`