let arr = [];
let ctr = 0;
let isXorZero = true;
let cWin = false;
function reply_click(click_id){
    let val = document.getElementById(click_id);
    if(val.innerText.length==0){
        ctr++;
        val.innerText = isXorZero?"❌":"⭕";
        arr[click_id] = val.innerText;
        isXorZero = !isXorZero;
        arr[click_id] = val.innerText;
    }
    console.log(click_id);
    if(checkWin(val.innerText)){
        alert(val.innerText + " Wins! 😀");
        cWin = true;
        location.reload();
    }
    if(ctr==9 && cWin==false){
        alert("It's a Draw!");
        location.reload();
    }
    
}
function checkWin(move){
    var res1 = false;
    if( checkRow(0,1,2,move) ||
        checkRow(3,4,5,move) ||
        checkRow(6,7,8,move) ||
        checkRow(0,3,6,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(0,4,8,move) ||
        checkRow(2,4,6,move)){
            res1 = true;
        }
        return res1;
}
function checkRow(a,b,c,move){
    var res = false;
    if(getbox(a)==move && getbox(b)==move && getbox(c)==move){
        res = true;
    }
    return res;
}
function getbox(num){
    console.log(document.getElementById(num).innerText);
    return document.getElementById(num).innerText;
}
