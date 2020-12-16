const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl=document.getElementById('seconds')



const newYears = "1 Jan 2021";

function countdowm(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate-currentDate)/1000;//divide by 1000 to convert to seconds
    const days = Math.floor(totalseconds/3600/24);//Math.floor returns the largest integer less than or equal to the given number 
    const hours = Math.floor(totalseconds/3600)%24;
    const mins  =Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
} 
//function formatTime(time){
    //return time < 10 ?  ('0${time}') :time;
//}
//initial call
countdowm();
setInterval(countdowm,1000)//calls function after every 1 second(1000ms)

