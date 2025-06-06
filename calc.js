let x = "";
let y = "";
let z = "";
let op = 0;
let display_var = "";
let current_var = "x" 
let display_sim = true;
let equals = false;

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
    
    op = "add";
    display.textContent = "+";
    x = display_var;
    display_var = "";



    
    

})

equals_btn.addEventListener("click", () => {
    equals = true;
    y = display_var;
    operate(op,parseFloat(x),parseFloat(y))

})


subtract_btn.addEventListener("click", () => {
    op = "subtract";
    display.textContent = "-";
    x = display_var;
    display_var = "";

    
})

multiply_btn.addEventListener("click", () => {
    op = "multiply";
    display.textContent = "X";
    x = display_var;
    display_var = "";

    
})

divide_btn.addEventListener("click", () => {
    op = "divide";
    display.textContent = "/";
    x = display_var;
    display_var = "";

    
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
})

