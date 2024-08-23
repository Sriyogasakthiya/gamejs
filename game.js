let a = Math.floor(Math.random()*100);
let count = 10;

function createtag(){
        document.getElementById('count').innerHTML = count;
    let b = document.getElementById('num');
    count--;
    if(b.value<a && count>0){
        document.getElementById('result').innerHTML = "number is larger";
    }
    else if(b.value>a && count>0){
        document.getElementById('result').innerHTML = "number is lower";
    }
    else if(b.value==a && count>0){
       window.location.href="./won.html";
    }
    else if(count == 0){
        window.location.href="./loss.html";
    }
}


function createbutton(){
    location.reload();
}

