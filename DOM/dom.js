const decrement = document.getElementsByClassName("decrement");
const increment = document.getElementsByClassName("increment");
const dispalyValue = document.getElementById("displayValue");
const reset = document.getElementsByClassName("reset");

decrement.addEventListener("click", () =>{
    const value = Number(dispalyValue.innerText);
    if (value > 0) {
        dispalyValue.innerText = value - 1;
    }
    else{
        alert("Negative value not allowed");
    }
});

increment.addEventListener("click", () =>{
    const value = Number(dispalyValue.innerText);
    if (value >= 10) {
        alert("10+ values are not allowed");
    }
    else{
        dispalyValue.innerText = value + 1;
    }
});

reset.addEventListener("click", () =>{
    dispalyValue.innerText = 0;
});