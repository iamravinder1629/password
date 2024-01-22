const button = document.getElementById("button");

button.addEventListener("click", process);


function process() {

    const user_password = document.getElementById("user_password").value;

    let i = 0;
    let interval = setInterval(function () {    
        if (user_password == i) {     
            clearInterval(interval);
            
        }
            document.getElementById("display").value = i;

            i++;
        },10);
}