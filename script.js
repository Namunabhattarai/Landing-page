
var coc=document.getElementById('coc');
var pepsi=document.getElementById('pepsi');
var sprite=document.getElementById('sprite');


coc.addEventListener("click",function(){
    document.getElementById('container').style.background="red";
    document.getElementById('img').innerHTML="<img src='images/coc.png'>";

})

pepsi.addEventListener("click",function(){
    document.getElementById('container').style.background="black";
    document.getElementById('img').innerHTML="<img src='images/pepsi.png'>";
    
})
sprite.addEventListener("click",function(){
    document.getElementById('container').style.background="green";
    document.getElementById('img').innerHTML="<img src='images/sprite.png'>";
})

