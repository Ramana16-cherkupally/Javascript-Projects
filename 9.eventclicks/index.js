  // const handleClick=(event)=>{
        //     divElement.textContent="";
        //     const newParagraph=document.createElement("p")
        //     newParagraph.textContent=`your fav language is:${event.target.textContent}`;
        //     divElement.appendChild(newParagraph);

        // }
        // document.querySelectorAll(".HeadingName").forEach((div) => {
        //     div.addEventListener("click", handleClick);
        // });

        const clickHandle=(event)=>{
          console.log(event.target);
          document.getElementById("div-main-elements").innerHTML=`your fav program language: ${event.target.textContent}`;
         };
 
         document.getElementById("HeadingName").addEventListener("click",clickHandle);
    