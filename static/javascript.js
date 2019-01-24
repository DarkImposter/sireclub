taskbutton = document.getElementById("taskButton")
closeButton = document.getElementById("closeButton")
shopButton = document.getElementById("shopButton")
chatButton = document.getElementById("chatButton")
task = document.getElementById("task")
enter = document.getElementById("enterButton")
lounge = document.getElementById("lounge")
lamp = document.getElementById("lamp")
chatRoom = document.getElementById("chatRoom")
submitText = document.getElementById("submitText")
let bround = "white"
let fin = false;
next = document.getElementById("nextButton")
shopCloseButton = document.getElementById("shopCloseButton")
const taskZoneContainer = document.getElementById("taskZoneContainer")
const shopZoneContainer = document.getElementById("shopZoneContainer")
background = document.getElementById("backround")
let response;
let tempTask
const form = document.getElementById('form');
e = ""
const postIn = document.getElementById("postIn")
const postSubmit = document.getElementById("postSubmit")
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

db.collection("posts").onSnapshot(snapshot =>{
  // document.getElementById("postWrapper").innerHTML = ""
  snapshot.docChanges().forEach(change =>{
    document.getElementById("postWrapper").innerHTML += genPosts(change.doc.data().post);
  });
});

function submitPost(message){
  db.collection("posts").add({
    post:message
  })
}
postSubmit.addEventListener("click", ()=>{
  submitPost(postIn.value);
  postIn.value = "";
})

function genPosts(message){
  return `
<div class="post pins"><h1>${message}</h1></div>
  `
}


function getPosts(){
  console.log("posts gettin");
  db.collection("posts").get().then(snapshot=> {
    snapshot.docs.forEach(doc=>{
      document.getElementById("postWrapper").innerHTML = "<div class='pins'>"+(genPosts(doc.data().post))+" "+"</div>"+document.getElementById("postWrapper").innerHTML
    })
  })
}
// getPosts();
function getPoster(){
    document.getElementById("postWrapper").innerHTML = ""
    getPosts();
}
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
function openchat() {
  chatZoneContainer.classList.add("chatZoneOpen")
  chatZoneContainer.classList.remove("chatZoneClose")
}
function closechat() {
  if (fin == false){
  alert("Uh oh! if you leave the chat room, you wont be able to come back without paying points! If you're sure, just close the chat room again.")
  fin = true;
}else{
  chatZoneContainer.classList.remove("chatZoneOpen")
  chatZoneContainer.classList.add("chatZoneClose")
  fin = false;
}

}


chatCloseButton.addEventListener("click", closechat)
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
let secretnobadywilleverguessthisvarhaencription = 0;
let done = false
const bar = document.getElementById("pointBar")


points.innerHTML = '<h1>Points:'+secretnobadywilleverguessthisvarhaencription+'</h1>'

bar.style.width = `${secretnobadywilleverguessthisvarhaencription}px`
let tasks = {
    "math1":{type:"text", prompt:"what is the square root of 121?", answer:"11"},
    "math2":{type:"text", prompt:"what is the area of a rectangle with width 56 and length 43?", answer:"2408"},
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
        points.innerHTML = '<h1>Points:'+secretnobadywilleverguessthisvarhaencription+'</h1>'
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

let colors = ["red", "green", "purple", "gray", "black", "white", "yellow"]

function listpick(list) {
  return list[Math.floor(Math.random()*list.length)];
}


background.addEventListener("click", ()=> {
  if (secretnobadywilleverguessthisvarhaencription < 50) {
    alert("you dont have enough points")
  }else {
    col = listpick(colors)
    document.body.style.backgroundColor = col
    secretnobadywilleverguessthisvarhaencription -= 50
    bar.style.width = `${secretnobadywilleverguessthisvarhaencription}px`
  }

})
lounge.addEventListener("click", ()=> {
  if (secretnobadywilleverguessthisvarhaencription < 100) {
    alert("you dont have enough points")
  }else{
    couches = ["couch1.png", "couch2.png",]
    select = listpick(couches)
    couch.setAttribute("src", select)

  }
})
chatButton.addEventListener("click", ()=> {
  if (secretnobadywilleverguessthisvarhaencription < 900) {
    alert("you dont have enough points")
  }else{
    alert("you now have one pass to the chat room!")
    openchat()
    secretnobadywilleverguessthisvarhaencription -= 900
    bar.style.width = `${secretnobadywilleverguessthisvarhaencription}px`
    points.innerHTML = '<h1>Points:'+secretnobadywilleverguessthisvarhaencription+'</h1>'
  }
})
