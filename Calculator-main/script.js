const display=document.getElementById("display");
const button=document.querySelectorAll(".btn");

let currentInput="";

button.forEach((button)=>{
    button.addEventListener("click",() =>{
        const value=button.innerText;

        if(value==="C"){
            currentInput="";
            display.value="";
        }
        else if(value==="="){
            currentInput=eval(currentInput);
            display.value=currentInput;
        }
        else
        {
            currentInput+=value;
            display.value=currentInput;
        }

    })

})