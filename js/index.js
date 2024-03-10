const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(button.textContent==="C") {
            display.textContent = "0";
            return;}

            if(button.textContent==="CE") {
                display.textContent = display.textContent.slice(0, -1);

                if(display.textContent === '') {
                    display.textContent = "0";
                }
                return;
            }

            if(button.textContent=== '.' && display.textContent === "0"){
                display.textContent = "0.";
                return;
                }

                if(button.textContent=== "="){
                    display.textContent = display.textContent.replace('÷', '/');
                    display.textContent = display.textContent.replace('x', '*');
                    try {
                        display.textContent = math.evaluate(display.textContent);
                    } catch(e) {
                        display.textContent = "ERROR";
                    }
                    return;
                }        
        
        if(display.textContent==="0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
        
    });
});
