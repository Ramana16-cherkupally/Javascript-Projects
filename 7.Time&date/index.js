const currentTime=()=>{
  let curTime=new Date().toLocaleTimeString();
  let curDate=new Date().toLocaleDateString();
  document.getElementById("demo").textContent=curTime;
  document.getElementById("date").textContent=curDate;
}

currentTime();

const intervalId =setInterval(()=>{
  currentTime();
},1000);