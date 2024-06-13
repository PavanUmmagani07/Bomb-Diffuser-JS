let difuserEl = document.getElementById("defuser");
let timerEl = document.getElementById('timer');


let countdown = 10;
let intervalId = setInterval(function(){
    countdown= countdown-1
    timerEl.textContent = countdown;
    if(countdown===0){
        timerEl.textContent = "BOOM"
        timerEl.style.color="Red";
        timerEl.style.fontWeight = "bold"
        clearInterval(intervalId);
    }
},1000)

difuserEl.addEventListener("keydown", function(event){
    let bombdifuserText = difuserEl.value;
    if(bombdifuserText==="defuse" && event.key==='Enter' && countdown!==0){
        timerEl.textContent = "BOMB DIFFUSED"
        timerEl.style.color="Green";
        timerEl.style.fontWeight = "bold"
        clearInterval(intervalId);
    }
})