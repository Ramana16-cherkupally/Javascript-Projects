let outerdiv=document.getElementById("outer");
        let middlediv=document.getElementById("middle");
        let innerdiv=document.getElementById("inner");

        const outercall=(event)=>{
            console.table([
                {
                    description:"i'm from outer",
                    target:event.target,
                    currentTarget:event.currentTarget
                }
            ]);
            // event.stopPropagation();
        };

        const middlecall=(event)=>{
            console.table([
                {
                    description:"i'm from middle",
                    target:event.target,
                    currentTarget:event.currentTarget
                }
            ])
        };
        const innercall=(event)=>{
            console.table([
                {
                    description:"i'm from inner",
                    target:event.target,
                    currentTarget:event.currentTarget
                }
            ]);
          
        };
    

        outerdiv.addEventListener("click",outercall,true);
        middlediv.addEventListener("click",middlecall,true);
        innerdiv.addEventListener("click",innercall,true);

