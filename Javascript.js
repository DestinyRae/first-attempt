document.getElementById("button1").onclick= function(){growFunction()};
function growFunction(){
    document.getElementById("box").style.width= "300px"; 
}
document.getElementById("button2").onclick= function(){blueFunction()};
function blueFunction(){
    document.getElementById("box").style.background = "blue"; 
}
document.getElementById("button3").onclick= function(){fadeFunction()};
function fadeFunction(){
    document.getElementById("box").style.opacity = "0.6"; 
}
document.getElementById("button4").onclick= function(){resetFunction()};
function resetFunction(){
    document.getElementById("box").style.background = "orange";
    document.getElementById("box").style.opacity = "1.0"; 
    document.getElementById("box").style.width = "150px";
}