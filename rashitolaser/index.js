document.addEventListener('DOMContentLoaded', () => {
 let show=false;
    document.getElementById("hamburguesa").addEventListener("click",()=>{
        if(!show)
        {
            let navegacion=document.querySelectorAll(".barraN");
            for(i=0; i<navegacion.length; i++)
            {
                navegacion[i].style.display= "block";
                navegacion[i].style.width= "100%";
            }
            show=true;
        }
        else{
            navegacion=document.querySelectorAll(".barraN");
            for(i=0; i<navegacion.length; i++)
            {
                navegacion[i].style.display= "none";
            }
            show=false;
        }
        
    })
})