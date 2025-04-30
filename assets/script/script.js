const theme = document.querySelector("#theme");
const body = document.querySelector("body");
const header = document.querySelector(".header")
const card = document.querySelectorAll(".card")
const sideline = document.querySelector(".sideline, .sideline a")
const sidelineP = document.querySelectorAll(".sideline p")
const sidelineH = document.querySelectorAll(".sideline h2")

theme.addEventListener("click",()=>{
    let t = body.style.backgroundColor;
    if(t == "var(--light-main-bg)"){
        body.style.backgroundColor = "var(--dark-main-bg)";    
        body.style.color = "var(--dark-color)";   

        header.style.color = "var(--dark-color)";
        sidelineP.forEach((s)=>{
            s.style.color = "var(--light-color)";
        })

        sideline.style.backgroundColor = "var(--light-main-bg)";  
        sideline.style.color = "var(--blue)";  
          
      
      
        card.forEach((c)=>{
            c.style.backgroundColor = "var(--dark-second)";
            c.style.color = "var(--dark-color)";
           
        })

    }else{
        body.style.backgroundColor = "var(--light-main-bg)";
        body.style.color = "var(--light-color)";
        
        header.style.color = "var(--light-color)";

        sidelineP.forEach((s)=>{
            s.style.color = "var(--dark-color)";
        })
        sideline.style.backgroundColor = "var(--dark-second)";
        sideline.style.color = "var(--dark-color)";  
    
        card.forEach((c)=>{
            c.style.backgroundColor = "var(--light-second)";
            c.style.color = "var(--light-color)";
        })

    }

})

card.forEach((c)=>{
    c.addEventListener("mouseenter", ()=>{
        c.style.transition = "filter 1s";
      //  c.style.filter = "blur(0px)";
    })
    c.addEventListener("mouseleave", ()=>{
      //  c.style.filter = "blur(2px)";
    })
})