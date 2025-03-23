let btn1=document.getElementById("mybutton1");
let btn2=document.getElementById("mybutton2");
let divCopy=document.querySelector(".copyCode");
let rgb1="#00004";
let rgb2="#44444";

const hexValue=()=>{
    let myhexValue="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
    color=color+(myhexValue[Math.floor(Math.random()*16)]);
    }
    return color;
};
const handlebutton1=()=>{
    let rgb1=hexValue();
    console.log(rgb1);
    btn1.innerText=`${rgb1}`;
    btn1.style.backgroundColor=`${rgb1}`;
   document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb1})`;
   divCopy.style.backgroundColor=`${rgb1}`;

   divCopy.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2})`;

}
const handlebutton2=()=>{
    let rgb2=hexValue();
    console.log(rgb2);
    btn2.innerText=`${rgb2}`;
    btn2.style.backgroundColor=`${rgb2}`;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb2},${rgb2})`;
    divCopy.style.backgroundColor=`${rgb2}`;
    divCopy.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2})`;
}

btn1.addEventListener("click",handlebutton1);
btn2.addEventListener("click",handlebutton2);
divCopy.addEventListener("click",()=>{
    navigator.clipboard.writeText(divCopy.innerText);
    alert("text-copied")
});