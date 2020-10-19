var ipt =document.getElementById("ipt");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var reponse = ipt.value;
    document.body.style.backgroundColor = reponse;
    localStorage.setItem("reponse", reponse);


});



/*localStorage.setItem("", reponse);
document.body.style.backgroundColor = "";*/

var color = localStorage.getItem("reponse");
if(color){
document.body.style.backgroundColor = color;
}
/*if (color === input) {
    console.log("bonjour " + prenom);
    
}*/