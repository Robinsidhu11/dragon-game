let dino=document.getElementById("dino")
let dragon=document.getElementById("dragon")
let spanele=document.getElementsByTagName("span")[0]
let score=0
let gameover=document.getElementsByClassName("gameover")[0]
let gamemusic=document.createElement("audio")
gamemusic.src="music.mp3"
gamemusic.play()

function dino_jump_and_back(){
    dino.classList.add("dinoup_down")
    dino.classList.remove("dinonormal")
    

    setTimeout(()=>{
        dino.classList.remove("dinoup_down")
        dino.classList.add("dinonormal")
        
    },800)
}
// move dragon
dragon.classList.add("dragonmove")

// calculate score. inc by1 after 2 seconds(time after which dragon complete one roation)
let scorecounter=setInterval(()=>{
    score++
    spanele.textContent=score
},2000)

// check if dino caught by dragon
let t=setInterval(()=>{
    let dino_left_value=parseInt(window.getComputedStyle(dino,null).left)

    let dragon_left_value=parseInt(window.getComputedStyle(dragon,null).left)
    
    let dino_top_value=parseInt(window.getComputedStyle(dino,null).bottom)

    let dragon_top_value=parseInt(window.getComputedStyle(dragon,null).bottom)

    let xoffset=Math.abs(dino_left_value-dragon_left_value)
    let yoffset=Math.abs(dino_top_value-dragon_top_value)

    if(xoffset<=100 && yoffset<=50){
        dragon.classList.remove("dragonmove")
        clearInterval(scorecounter)
        clearInterval(t)
        gameover.classList.remove("hidegameover")
        gamemusic.pause()
        let gameovermusic=document.createElement("audio")
        gameovermusic.src="gameover.mp3"
        gameovermusic.play()
        dragon.style.left=(dino_left_value+100)+"px"
    }
},1)

document.addEventListener('keydown',(ele)=>{
    
    if(ele.keyCode==37){
        // left movement
       let currentleftpos= parseInt(window.getComputedStyle(dino,null).left)
       dino.style.left=(currentleftpos-100)+"px"

        
    }
    else if(ele.keyCode==38)
    {
        // up movement
        let jumpsound=document.createElement("audio")
        jumpsound.src="jump.mp3"
        jumpsound.play()
        dino_jump_and_back()
        // jumpsound.pause()

    }
    else if(ele.keyCode==39){
        // right movement
        
        let currentleftpos= parseInt(window.getComputedStyle(dino,null).left)
        dino.style.left=(currentleftpos+100)+"px"
        
    }
    else{
        
    }
})