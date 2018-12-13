taskbutton = document.getElementById("taskButton")
closeButton = document.getElementById("closeButton")
shopButton = document.getElementById("shopButton")
task = document.getElementById("task")
enter = document.getElementById("enterButton")
next = document.getElementById("nextButton")
shopCloseButton = document.getElementById("shopCloseButton")
const taskZoneContainer = document.getElementById("taskZoneContainer")
const shopZoneContainer = document.getElementById("shopZoneContainer")
let response;
let tempTask
const form = document.getElementById('form');
e = ""

    
function openTasks(){
    done = false
    response = gentask()
    response.value = ''
    taskZoneContainer.classList.add("taskZoneOpen")
    taskZoneContainer.classList.remove("inputopen")
}
function closeTasks(){
    taskZoneContainer.classList.remove("taskZoneOpen")
    taskZoneContainer.classList.add("classZoneClose")
}
function openShop(){
    shopZoneContainer.classList.add("shopZoneOpen")
    shopZoneContainer.classList.remove("shopZoneClose")
}
function closeshop(){
    shopZoneContainer.classList.remove("shopZoneOpen")
    shopZoneContainer.classList.add("shopZoneClose")
}
shopCloseButton.addEventListener("click", closeshop)
shopButton.addEventListener("click", openShop)
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
let secretnobadywilleverguessthisvarhaencription = 1;
let done = false
const bar = document.getElementById("pointBar")


bar.style.width = `${secretnobadywilleverguessthisvarhaencription}px`
let tasks = {
    "math1":{type:"text", prompt:"what is the square root of 121?", answer:"11"},
    "math2":{type:"text", prompt:"what is the area of a rectangle with width 56 and height 43?", answer:"2408"},
    "math3":{type:"text", prompt:"what is (X+3)^2 if X = 2?", answer:"25"}, 
    "math4":{type:"text", prompt:"what is 12 / 3?", answer:"4"},
    "fact1":{type:"text", prompt:"what is the most common letter in the englesh language?", answer:"e"},
    "fact2":{type:"text", prompt:"who was the first presedent of the US?", answer:"George Washington"},

}
function gettasks() {
    const rand = Math.floor(Math.random()*Object.keys(tasks).length);
    return tasks[Object.keys(tasks)[rand]];
}
next.addEventListener("click", ()=> {
    if (done) {
        openTasks()
        response.value = ""
    }else{
        alert("Woah! are you sure you want to leave? if so, just click next task again.")
        done = true

    }
})
enter.addEventListener("click", ()=> {
    if (response.value == tempTask.answer) {
        task.innerHTML = "<p>Wow thats Correct! you have been awarded 5 points!</p>"
        done = true;
        enterButton.style.display = "none"
        in1.style.display = "none"
        secretnobadywilleverguessthisvarhaencription += 5;
        bar.style.width = `${secretnobadywilleverguessthisvarhaencription}px`
    }else{
        alert("Whoopsies! try again.")
    }
})

function gentask(){
    tempTask = gettasks();
    if (tempTask.type == "text"){
        task.innerHTML = `<h1>Your task is: <br></h1>
        <p class="question">`+tempTask.prompt+`</p>`
        enterButton.style.display = "inline-flex"
        in1.style.display = "block"
        return document.getElementById("in1")


    }
    
}
