let x = "";
let y = "";
let z = "";
let op = 0;
let display_var = "";
let current_var = "x" 
let display_sim = true;
let equals = false;

let typing_x = true;
let operator_display = true;
let last_btn = 0; 

// Applies given operation (op) to x and y then stores in z. 
function operate(op, X, Y) { 
    
    switch (op) {
        case "add":
            z = add(X,Y);
            break;
        case "subtract":
            z = subtract(X,Y);
            break;
        case "multiply":
            z = multiply(X,Y);
            break;
        case "divide":
            z = divide(X,Y);
            break;

    }

    console.log(x)
    console.log(y)
    console.log(z)

    let rounded_string = z.toFixed(7);
    z = parseFloat(rounded_string)
    
    display.textContent = z;

    op = 0;
    display_var = z;
    y = 0;
    z = 0;
    
    
}

// Add x and y, return result.
function add(x,y) {
    return x + y;
}

// Subtract y from x, return result.
function subtract(x,y) {
    return x - y;
}

// Multiply x by y, return result. 
function multiply(x,y) {
    return x * y;
}

//Divide x by y, return result. 
function divide(x,y) {
    return (x/y);
}



const zero = document.querySelector("#zero"); 
const one = document.querySelector("#one"); 
const two = document.querySelector("#two"); 
const three = document.querySelector("#three"); 
const four = document.querySelector("#four"); 
const five = document.querySelector("#five"); 
const six = document.querySelector("#six"); 
const seven = document.querySelector("#seven"); 
const eight = document.querySelector("#eight"); 
const nine = document.querySelector("#nine");

const add_btn = document.querySelector("#add"); 
const subtract_btn = document.querySelector("#subtract"); 
const multiply_btn = document.querySelector("#multiply"); 
const divide_btn = document.querySelector("#divide"); 
const equals_btn = document.querySelector("#equals"); 
const clear_btn = document.querySelector("#clear"); 
const delete_btn = document.querySelector("#delete"); 
const button_container = document.querySelector("#button_container")
const decimal_btn = document.querySelector("#decimal");

const display = document.querySelector("#display")
display.textContent = "0";

zero.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "0";
    display.textContent = display_var;


})

one.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "1";
    display.textContent = display_var;
})

two.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "2";
    display.textContent = display_var;

})

three.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "3";
    display.textContent = display_var;
})

four.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "4";
    display.textContent = display_var;
})

five.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "5";
    display.textContent = display_var;
})

six.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "6";
    display.textContent = display_var;
})

seven.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "7";
    display.textContent = display_var;
})

eight.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "8";
    display.textContent = display_var;
})

nine.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += "9";
    display.textContent = display_var;
})

add_btn.addEventListener("click", () => {
    //Ensure + isn't being clicked multiple times in a row.
    if (last_btn == "+") {
        return;
    }

    else if (last_btn == "X" || last_btn == "-" || last_btn == "/") {
        display.textContent = "+";
        op = "add";
    }

    
    else if (typing_x == true) {
        op = "add";
        display.textContent = "+";
        x = display_var;
        display_var = "";
        typing_x = false;
        
    }

    else if (typing_x == false) {
        equals = true;
        y = display_var;
        operate(op,parseFloat(x),parseFloat(y))
        x = display_var;
        op = "add"
        
    }



    





    
    

})

equals_btn.addEventListener("click", () => {
    
    if (last_btn == "=") {
        return;
    }
    
    
    else {
        equals = true;
        typing_x = true;
        y = display_var;
        operate(op,parseFloat(x),parseFloat(y))
    }

})


subtract_btn.addEventListener("click", () => {
    
    if (last_btn == "-") {
        return;
    }

    else if (last_btn == "+" || last_btn == "X" || last_btn == "/") {
        display.textContent = "-";
        op = "subtract";
    }
    
    else if (typing_x == true) {
        op = "subtract";
        display.textContent = "-";
        x = display_var;
        display_var = "";
        typing_x = false;
        
    }

    else if (typing_x == false) {
        equals = true;
        y = display_var;
        operate(op,parseFloat(x),parseFloat(y))
        x = display_var;
        op = "subtract"
        
    }

    
})

multiply_btn.addEventListener("click", () => {
    
    if (last_btn == "X") {
        return;
    }

    else if (last_btn == "+" || last_btn == "-" || last_btn == "/") {
        display.textContent = "X";
        op = "multiply";
    }
    
    else if (typing_x == true) {
        op = "multiply";
        display.textContent = "X";
        x = display_var;
        display_var = "";
        typing_x = false;
        
    }

    else if (typing_x == false) {
        equals = true;
        y = display_var;
        operate(op,parseFloat(x),parseFloat(y))
        x = display_var;
        op = "multiply"
        
    }

    
})

divide_btn.addEventListener("click", () => {
    
    if (last_btn == "/") {
        return;
    }

    else if (last_btn == "+" || last_btn == "-" || last_btn == "X") {
        display.textContent = "/";
        op = "divide";
    }

    else if (typing_x == true) {
        op = "divide";
        display.textContent = "/";
        x = display_var;
        display_var = "";
        typing_x = false;
        
    }

    else if (typing_x == false) {
        equals = true;
        y = display_var;
        operate(op,parseFloat(x),parseFloat(y))
        x = display_var;
        op = "divide"
        
    }

    
})

clear_btn.addEventListener("click", () => {
    op = 0;
    x = "";
    y = "";
    z = "";
    current_var = "x";
    display_var = "";
    display.textContent = "0";
    time_for_y = false;
    typing_x = true;
})

button_container.addEventListener("click", (event) => { 
    
    if (display_var.length > 7 ) {display_var = display_var.slice(0,7);}
    
    //Makes sure clicking something other than a button doesn't affect the last registered button click.
    else if (event.target.textContent.slice(0,1) == "\n") {return;}
    //Makes sure that operators can't be clicked multiple times in a row. 
    else {last_btn = event.target.textContent}



})

document.addEventListener("keypress", (event) => { 
    
    if (display_var.length > 7 ) {display_var = display_var.slice(0,7);}
    

    else if (event.key == "0") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "0";
        display.textContent = display_var;
    }

    else if (event.key == "1") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "1";
        display.textContent = display_var;
    }

    else if (event.key == "2") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "2";
        display.textContent = display_var;
    }

    else if (event.key == "3") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "3";
        display.textContent = display_var;
    }

    else if (event.key == "4") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "4";
        display.textContent = display_var;
    }

    else if (event.key == "5") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "5";
        display.textContent = display_var;
    }

    else if (event.key == "6") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "6";
        display.textContent = display_var;
    }

    else if (event.key == "7") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "7";
        display.textContent = display_var;
    }

    else if (event.key == "8") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "8";
        display.textContent = display_var;
    }

    else if (event.key == "9") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += "9";
        display.textContent = display_var;
    }

    else if (event.key == "+") {
        
        //Ensure + isn't being clicked multiple times in a row.
        if (last_btn == "+") {
            return;
        }

        else if (last_btn == "X" || last_btn == "-" || last_btn == "/") {
            display.textContent = "+";
            op = "add";
            last_btn = "+";
        }

        
        else if (typing_x == true) {
            op = "add";
            display.textContent = "+";
            x = display_var;
            display_var = "";
            typing_x = false;
            last_btn = "+";
            
        }

        else if (typing_x == false) {
            equals = true;
            y = display_var;
            operate(op,parseFloat(x),parseFloat(y))
            x = display_var;
            op = "add"
            last_btn = "+";
            
        }

    }

    else if (event.key == "X") {
        
        if (last_btn == "X") {
            return;
        }

        else if (last_btn == "+" || last_btn == "-" || last_btn == "/") {
            display.textContent = "X";
            op = "multiply";
            last_btn = "X";
        }
        
        else if (typing_x == true) {
            op = "multiply";
            display.textContent = "X";
            x = display_var;
            display_var = "";
            typing_x = false;
            last_btn = "X";
            
        }

        else if (typing_x == false) {
            equals = true;
            y = display_var;
            operate(op,parseFloat(x),parseFloat(y))
            x = display_var;
            op = "multiply"
            last_btn = "X";
            
        }

    }

    else if (event.key == "/") {
        
        if (last_btn == "/") {
            return;
        }

        else if (last_btn == "+" || last_btn == "-" || last_btn == "X") {
            display.textContent = "/";
            op = "divide";
            last_btn = "/";
        }

        else if (typing_x == true) {
            op = "divide";
            display.textContent = "/";
            x = display_var;
            display_var = "";
            typing_x = false;
            last_btn = "/";
            
        }

        else if (typing_x == false) {
            equals = true;
            y = display_var;
            operate(op,parseFloat(x),parseFloat(y))
            x = display_var;
            op = "divide"
            last_btn = "/";
            
        }

    }

    else if (event.key == "-") {
        
        if (last_btn == "-") {
            return;
        }

        else if (last_btn == "+" || last_btn == "X" || last_btn == "/") {
            display.textContent = "-";
            op = "subtract";
            last_btn = "-";
        }
        
        else if (typing_x == true) {
            op = "subtract";
            display.textContent = "-";
            x = display_var;
            display_var = "";
            typing_x = false;
            last_btn = "-";
            
        }

        else if (typing_x == false) {
            equals = true;
            y = display_var;
            operate(op,parseFloat(x),parseFloat(y))
            x = display_var;
            op = "subtract"
            last_btn = "-";
            
        }

    }

    else if (event.key == ".") {
        if (equals == true) {display_var = ""; equals = false;}
        display_var += ".";
        display.textContent = display_var;
    }


    else if (event.key == "=") {
        if (last_btn == "=") {
        return;
        }
    
    
        else {
            equals = true;
            typing_x = true;
            y = display_var;
            operate(op,parseFloat(x),parseFloat(y))
            last_btn = "=";
        }   
    }
    
    





})

document.addEventListener("keydown", (event) => { 
    if (event.key == "Backspace") {
        if (last_btn == "+" || last_btn == "-" || last_btn == "X" || last_btn == "/") {
        return;
        }
        else {
            display_var = display_var.slice(0,-1);
            display.textContent = display_var;
        }
    }
})



delete_btn.addEventListener("click", () => {
    if (last_btn == "+" || last_btn == "-" || last_btn == "X" || last_btn == "/") {
        return;
    }
    else {
        display_var = display_var.slice(0,-1);
        display.textContent = display_var;
    }
})

decimal_btn.addEventListener("click", () => {
    if (equals == true) {display_var = ""; equals = false;}
    display_var += ".";
    display.textContent = display_var;
})

