
let input = document.getElementById('input');




function keyup() {
    const num = input.value;
    if ((num % 2) >= 0) {
        document.querySelector("#output").innerHTML = "The Number " + num + " Is The Even Number";
        var num1 = parseInt(num);
        document.querySelector("#NTnumber").innerHTML
            = "The Next Three Even Number Is " + (num1 + 2) + " , " + (num1 + 4) + " , " + (num1 + 6);
    }
    if ((num % 2) === 1) {
        document.querySelector("#output").innerHTML = "The Number " + num + " Is The Odd Number";
        var num1 = parseInt(num);
        document.querySelector("#NTnumber").innerHTML
            = "The Next Three Odd Number Is " + (num1 + 2) + " , " + (num1 + 4) + " , " + (num1 + 6);
    }
    else if (num < 0) {
        document.querySelector("#output").innerHTML = "It Is The Negative Number ";
        document.querySelector("#NTnumber").innerHTML = "Use Positive Number"
    }
    else if (num == ""){
        document.querySelector("#output").innerHTML = "Write A Number";
        document.querySelector("#NTnumber").innerHTML = "";
        
    }

}

