const countDown=document.getElementById("countDown");
const resetValue=document.getElementById("resetValue");
let startCount=0;
let intervalId;

const startTimer=()=>{
intervalId= setInterval(()=>{
        countDown.innerText=startCount++;
    },1000);

};

const stopTimer=()=>{
   clearInterval(intervalId);
   showstopValue();
};


const resetTime=()=>{
    startCount=0;
    countDown.innerText=startCount;
    clearInterval(intervalId);
};

const showstopValue=()=>{
    const newPara=document.createElement('p');
    newPara.innerHTML=`this time is stoped by at ${startCount-1}`;
    resetValue.append(newPara);

};

const clearValue=()=>{
    resetValue.innerHTML="";
    clearInterval(intervalId);
};

document.querySelector(".startbtn").addEventListener('click',startTimer);
document.querySelector(".resetbtn").addEventListener('click',resetTime);
document.querySelector(".stopbtn").addEventListener('click',stopTimer);
document.querySelector(".showbtn").addEventListener('click',showstopValue);
document.querySelector(".clearbtn").addEventListener('click',clearValue);
