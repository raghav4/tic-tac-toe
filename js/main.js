window.addEventListener("load",bindEvents);
var isXorZero = false;
function showTic(){
    // this - Current Calling Button Reference
    console.log("Show Tic Call");
    if(this.innerText.trim().length==0)
    {
        this.innerText =  isXorZero?"⭕":"❌";
        isXorZero = !isXorZero;
    }
}

function bindEvents(){
var buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",showTic);
    //!button.showTic()
    
}
}
//bindEvents();