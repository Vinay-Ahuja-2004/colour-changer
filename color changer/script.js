const buttons=document.querySelectorAll(".button")
const changebg=document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id=='grey'){
            changebg.style.backgroundColor=e.target.id;
            }
            if(e.target.id=='white'){
                changebg.style.backgroundColor=e.target.id;
                }
                if(e.target.id=='blue'){
                    changebg.style.backgroundColor=e.target.id;
                    }
                    if(e.target.id=='yellow'){
                        changebg.style.backgroundColor=e.target.id;
                        }
    })
})
    
