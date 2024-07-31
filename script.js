let userName = prompt("Enter your name:");
        if (userName) {
            document.getElementById("welcome-message").textContent = "Hello, " + userName + "!";
        } else {
            document.getElementById("welcome-message").textContent = "Hello, guest!";
        }
        
        let userNAMES = alert("Enter your name:");
        if (userNAMES) {
            document.getElementById("welcome-message").textContent = "Hello, " + userNAMES + "!";
        } else {
            document.getElementById("welcome-message").textContent = "Hello, guest!";
        }
        let submitbtnn = document.querySelector("#submit");
        
        alert("successfull");
       

       
      /*  let submitbtn = document.querySelector("#submit");
        submitbtn.addEventListener("click",() => {               wrong
        })     
        console.alert("successfull");
       */