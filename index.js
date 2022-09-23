const container = document.getElementById('container')
const btn = document.getElementById('btn')
const h1 = document.getElementById('h1')
const counterTimer = document.getElementById('counterTimer')
const days = document.querySelector('.days')
const hrs = document.querySelector('.hrs')
const mins = document.querySelector('.mins')
const secs = document.querySelector('.secs')
const second = 1000,
    minute = 60*second,
    hour = 60*minute,
    day = 24*hour;
  
   



const timerFun=()=>{
   
        const newYear = prompt("Enter Year in yyyy")
        const newMonth = prompt("Enter Month in mm")
        const newDay = prompt("Enter Days in dd")
        const newHour = prompt('Enter Hours in hh format')
        const newMin = prompt('Enter Minutes in mm format')
        
       
      
    
         const intervalID = setInterval(()=>{
                const upcomingDate = new Date(`${newYear}-${newMonth}-${newDay}`).setHours(newHour, newMin)
                const todayDate = new Date().getTime()
                const dateDifference  = upcomingDate - todayDate;
                const dayLeft = Math.floor(dateDifference/day)
                const hoursLeft = Math.floor((dateDifference%day)/hour)
                const minutesLeft = Math.floor((dateDifference % hour)/minute)
                const secondLeft = Math.floor((dateDifference % minute)/second)

                days.innerHTML = dayLeft
                hrs.innerHTML = hoursLeft
                mins.innerHTML = minutesLeft
                secs.innerHTML = secondLeft

                console.log(dateDifference)
                if(dateDifference < 0){
                    counterTimer.style.display = 'none'
                    h1.innerText = "Time's Up"
                    h1.style.fontSize = "50px"
                    clearInterval(intervalID)
                    container.style.backgroundImage="url('images/fire.gif')"
                    container.style.backgroundSize = "300px"
                    }
            })
    }
    
    
    
    
btn.addEventListener("click",timerFun)