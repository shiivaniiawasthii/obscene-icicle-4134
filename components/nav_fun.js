 
        import nav from "./nav.js"
        document.getElementById("nav").innerHTML=nav()
        console.log(nav)
        
let profile=document.getElementById("profile")

let loginstatus = JSON.parse(localStorage.getItem("loginstatus"))
                let succ = JSON.parse(localStorage.getItem("succ"))
                console.log(loginstatus,succ)
                let count=0
if(loginstatus==true){
        let profile=document.getElementById("profile")
       
        profile.innerHTML=succ.name
       
       profile.setAttribute("class","profile_name")
       profile.addEventListener("click",dash)
//        document.querySelector("main").innerHTML=""
       count++

       function dash  ()  {
    ;
        let x = `<div class="main2">
                <h3><a href="dashboard.html">My Dashboard</a></h3>
                <h3><a href="myprofile.html">My Profile</a></h3>
                <h3  id="logout" >Logout</h3>
                </div>`
              
          
                document.getElementById("appendprofile").innerHTML=x;
               console.log(x)
               let log = document.getElementById("logout")
               log.addEventListener("click",aa)
console.log(log)
        
                
        }
       
        
}
        profile.addEventListener("click",opendrop)
        function opendrop(){
                count++
                
              
       let x= document.getElementById("appendprofile").innerHTML;
//        console.log(x)
       x=""
       
        let main= document.querySelector(".main")
        // div.setAttribute("class","main")

        let div1= document.createElement("div");
        div1.innerHTML="Login"

        div1.addEventListener("click",function(){
                window.location.href="login.html"
        })

        // .............................loginpage.........................//
        
        let div2= document.createElement("div");
        div2.innerHTML="SignUp"

        div2.addEventListener("click",function(){
                window.location.href="signup.html"
        })

        // .................signuppage.................


   
        main.append(div1,div2)
        document.getElementById("appendprofile").append(main)

}
function aa(){
        console.log("logout")
        if(loginstatus==true){
                window.location.href="index.html"
                loginstatus=null
                localStorage.setItem("loginstatus",JSON.stringify(loginstatus))
                console.log(loginstatus)


                profile.addEventListener("click",opendrop)
                function opendrop(){
                        count++
                        
                      
               let x= document.getElementById("appendprofile").innerHTML;
        //        console.log(x)
               x=""
               
                let main= document.querySelector(".main")
                // div.setAttribute("class","main")
        
                let div1= document.createElement("div");
                div1.innerHTML="Login"
        
                div1.addEventListener("click",function(){
                        window.location.href="login.html"
                })
        
                // .............................loginpage.........................//
                
                let div2= document.createElement("div");
                div2.innerHTML="SignUp"
        
                div2.addEventListener("click",function(){
                        window.location.href="signup.html"
                })
        
                // .................signuppage.................
        
        
           
                main.append(div1,div2)
                document.getElementById("appendprofile").append(main)
                
        
        }
        }

}

