document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    console.log('DOM is ready!');
    const display =document.getElementById('calc-display');
    const buttons=document.getElementsByClassName('btn');
    console.log(buttons);
    
    let currentValue="";
    
    function evaluateResult(){
        const convertedValue=currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("ln", "Math.log")
        .replace("π", "Math.PI")
        .replace("log", "Math.log10")
        .replace("e", "Math.E")
        .replace("tan", "Math.tan")
        .replace("√", "Math.sqrt");

        const result=eval(convertedValue);
        currentValue=result.toString();
        display.value=currentValue
    }

    for(let i=0; i<buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click', function(){
            const value=button.innerText;

            if(value=="AC"){
                currentValue ="";
                display.value=currentValue;
            }else if(value == "="){
                evaluateResult();

            }else{
                currentValue +=value;
                display.value=currentValue;
            }
        });
        
    }

   

});