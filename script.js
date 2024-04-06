let menu= document.getElementById("menu");
let cancel= document.getElementById("cancel");
let list= document.getElementById("list");
turn = 'close';

menu.onclick = function(){
    if(turn == 'close'){
        list.classList.remove("none")
        turn = 'overt';
    }
}

cancel.onclick = function(){
    if(turn == 'overt'){
        list.classList.add("none")
        turn = 'close'
    }
}