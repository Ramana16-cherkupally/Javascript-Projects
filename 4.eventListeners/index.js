let myButton=document.getElementById("myButton");
    let rectanglediv=document.querySelector(".rectangle");


    const HandleMouseEvent2=()=>{
        // console.log("click");
        rectanglediv.classList.add("addTrasitions1")

    }
    const HandleMouseEvent3=()=>{
        rectanglediv.classList.add("addTrasitions3")

    }
    const HandleMouseEvent4=()=>{
        rectanglediv.classList.add("addTrasitions4")

    }
     const HandleMouseEvent5=()=>{
        rectanglediv.classList.add("addTrasitions5")

    }
    const HandleMouseEvent6=()=>{
        rectanglediv.classList.add("addTrasitions6")

    }
   myButton.addEventListener('click',HandleMouseEvent2);
   rectanglediv.addEventListener('mouseover',HandleMouseEvent3);
   rectanglediv.addEventListener('mouseout',HandleMouseEvent4);
   rectanglediv.addEventListener('mousedown',HandleMouseEvent5);
   rectanglediv.addEventListener('mouseup',HandleMouseEvent6);
