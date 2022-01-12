const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const login= document.querySelector("#login");

login.addEventListener("click",()=>{

    
    const p= document.querySelector("#notification");
    if(pass.value=="1234" && user.value=="abcd")
    {
        p.innerHTML="Successful";
        window.open("page1.html","_parent")
        
    }
    else 
    {
        p.innerHTML="Unseccessful";
        setTimeout(abc,1000)
        function abc()
        {
            p.innerHTML="";
        }      

    }
    
}) //login.addEventListener(type of event,function)




