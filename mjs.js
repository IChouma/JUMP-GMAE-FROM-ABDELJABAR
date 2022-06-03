let hero = document.getElementById("hero");
let obstacle = document.getElementById("obstacle");
window.addEventListener("keydown",function(e){
    if(e.key==="ArrowUp"){
        jump();
    }
});
function jump(){
    hero.classList.add("animate");
    setTimeout(function(){
        hero.classList.remove("animate")
    },500)
}

let checkStatus= setInterval(function(){
    let heroTop=parseInt( window.getComputedStyle(hero).getPropertyValue("top"));
    let obstacleLeft=parseInt( window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft<30 && obstacleLeft>0 && heroTop>=200){
        obstacle.style.animation="none";
        obstacle.style.display="none";
        alert("You Are Lose")
    }
},10)