//var

// menu
let menu = document.querySelector(".links .click");
let into = document.querySelector(".landing .into");
menu.onclick = ()=>{
    into.classList.toggle("on")
}

    // skillsCounter
let skills = document.querySelector(".our-skills")
let rankUnder = document.querySelectorAll(".rank .under span")
let rankMain = document.querySelectorAll(".rank .main span")

let started = false 
let startCount = false
let startEvent = false 
window.onscroll=function(){
    if(window.scrollY >= skills.offsetTop - 300){
        
        if(started === false){
            rankMain.forEach((s)=>{
                let counter=0
                let count = setInterval(()=>{
                    started = true
                    counter++ 
                    s.textContent = counter
                    // console.log(rankMain[0].textContent)
                    let goal = parseInt(s.dataset.goal);
                    if(counter >= goal){
                        clearInterval(count)
                    }
                },10)
            })
                rankUnder.forEach((e,endex)=>{
                e.style.width = `${rankMain[endex].textContent}%`
            }) 

    }

//Counter

let awesome = document.querySelector(".awesome")
let box = document.querySelectorAll(".awesome .box span")

    if(window.scrollY >= awesome.offsetTop - 300){
        if(startCount === false){
            box.forEach((x)=>{                                                  
                let counter=0
                let goal = parseInt(x.dataset.goal);
                let count = setInterval(()=>{
                    startCount = true
                    counter++ 
                    x.textContent = counter
                    if(counter >= goal){
                        clearInterval(count)
                    }
                }, 2000 / goal)
            })
            }

        }
    }
}
let event = document.querySelector(".latest-events")
let time = document.querySelectorAll(".events .box .time")
            
            
let countDate = new Date(`Dec 31, 2025 23:59:59`).getTime();

            let T1 = setInterval(()=>{
                startEvent = true
                let dateNow = new Date().getTime();
                let dateDiff = countDate - dateNow
                let days = Math.floor(dateDiff /(1000 * 60 * 60 * 24 ))
                let hours =Math.floor(dateDiff % (1000 * 60 * 60 * 24 ) /(1000 * 60 * 60))
                let minutes =Math.floor(dateDiff % (1000 * 60 * 60) /(1000 * 60))
                let seconds =Math.floor(dateDiff % (1000 * 60) /(1000))
                time[0].innerHTML = days
                time[1].innerHTML = hours
                time[2].innerHTML = minutes
                time[3].innerHTML = seconds
                if(dateDiff === 0){
                    clearInterval(T1)
                }
            },1000)    