
var output_2 = document.querySelector(".output_2"); 
var output_1 = document.querySelector(".output_1");



document.querySelector(".num_1").addEventListener("click", function () {
    output_2.innerHTML += "1";
});
document.querySelector(".num_2").addEventListener("click", function () {
    output_2.innerHTML += "2";
});
document.querySelector(".num_3").addEventListener("click", function () {
    output_2.innerHTML += "3";
});
document.querySelector(".num_4").addEventListener("click", function () {
    output_2.innerHTML += "4";
});
document.querySelector(".num_5").addEventListener("click", function () {
    output_2.innerHTML += "5";
});
document.querySelector(".num_6").addEventListener("click", function () {
    output_2.innerHTML += "6";
});
document.querySelector(".num_7").addEventListener("click", function () {
    output_2.innerHTML += "7";
});
document.querySelector(".num_8").addEventListener("click", function () {
    output_2.innerHTML += "8";
});
document.querySelector(".num_9").addEventListener("click", function () {
    output_2.innerHTML += "9";
});
document.querySelector(".num_0").addEventListener("click", function () {
    output_2.innerHTML += "0";
});
document.querySelector(".num_dot").addEventListener("click", function () {
    if (output_2.innerHTML.includes(".")) {
        output_2.innerHTML = output_2.innerHTML;
    } else {
    output_2.innerHTML += ".";
    }
});
document.querySelector(".op_divide").addEventListener("click", function () {
    if (output_1.innerHTML == "") {
    output_1.innerHTML = Number(output_2.innerHTML) + "÷";
    } else {
        switch (output_1.innerHTML.slice(-1)){
            case "+":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) + Number(output_2.innerHTML) + "÷";
                output_2.innerHTML = "";
                break;
            case "-":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) - Number(output_2.innerHTML) + "÷";
                output_2.innerHTML = "";
                break;
            case "*":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) * Number(output_2.innerHTML) + "÷";
                output_2.innerHTML = "";
                break;
            case "÷":
            output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) / Number(output_2.innerHTML) + "÷";
            output_2.innerHTML = "";
            break;
        }
    }
    output_2.innerHTML = "";
});
document.querySelector(".op_multiply").addEventListener("click", function () {
    if (output_1.innerHTML == "") {
    output_1.innerHTML = Number(output_2.innerHTML) + "*";
    } else {
        switch (output_1.innerHTML.slice(-1)){
            case "+":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) + Number(output_2.innerHTML) + "*";
                output_2.innerHTML = "";
                break;
            case "-":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) - Number(output_2.innerHTML) + "*";
                output_2.innerHTML = "";
                break;
            case "*":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) * Number(output_2.innerHTML) + "*";
                output_2.innerHTML = "";
                break;
            case "÷":
            output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) / Number(output_2.innerHTML) + "*";
            output_2.innerHTML = "";
            break;
        }
    }
    output_2.innerHTML = "";
});
document.querySelector(".op_plus").addEventListener("click", function () {
     
    if (output_1.innerHTML == "") {
        output_1.innerHTML = Number(output_2.innerHTML) + "+";
    } else {
        switch (output_1.innerHTML.slice(-1)){
            case "+":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) + Number(output_2.innerHTML) + "+";
                output_2.innerHTML = "";
                break;
            case "-":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) - Number(output_2.innerHTML) + "+";
                output_2.innerHTML = "";
                break;
            case "*":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) * Number(output_2.innerHTML) + "+";
                output_2.innerHTML = "";
                break;
            case "÷":
            output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) / Number(output_2.innerHTML) + "+";
            output_2.innerHTML = "";
            break;
        }
    }
    output_2.innerHTML = "";
});
document.querySelector(".op_minus").addEventListener("click", function () {
    if (output_1.innerHTML == "") {
    output_1.innerHTML = Number(output_2.innerHTML) + "-";
    } else {
        switch (output_1.innerHTML.slice(-1)){
            case "+":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) + Number(output_2.innerHTML) + "-";
                output_2.innerHTML = "";
                break;
            case "-":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) - Number(output_2.innerHTML) + "-";
                output_2.innerHTML = "";
                break;
            case "*":
                output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) * Number(output_2.innerHTML) + "-";
                output_2.innerHTML = "";
                break;
            case "÷":
            output_1.innerHTML = Number(output_1.innerHTML.slice(0,-1)) / Number(output_2.innerHTML) + "-";
            output_2.innerHTML = "";
            break;
        }
    }
    output_2.innerHTML = "";
});

document.querySelector(".del").addEventListener("click", function () {
    output_2.innerHTML = output_2.innerHTML.slice(0,-1);
});
document.querySelector(".ac").addEventListener("click", function () {
    output_2.innerHTML = "";
    output_1.innerHTML = "";
});
document.querySelector(".equal").addEventListener("click", function () {
    switch (output_1.innerHTML.slice(-1)){
        case "+":
            output_2.innerHTML = Number(output_1.innerHTML.slice(0,-1)) + Number(output_2.innerHTML);
            output_1.innerHTML = "";
            break;
        case "-":
            output_2.innerHTML = Number(output_1.innerHTML.slice(0,-1)) - Number(output_2.innerHTML);
            output_1.innerHTML = "";
            break;
        case "*":
            output_2.innerHTML = Number(output_1.innerHTML.slice(0,-1)) * Number(output_2.innerHTML);
            output_1.innerHTML = "";
            break;
        case "÷":
        output_2.innerHTML = Number(output_1.innerHTML.slice(0,-1)) / Number(output_2.innerHTML);
        output_1.innerHTML = "";
        break;
    } 
});



