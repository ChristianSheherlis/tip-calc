//get bill input
const tipForm = document.getElementById("tip-form"); //global scope

tipForm.addEventListener("submit", function(e){
    e.preventDefault();
    const tipPercent = Number(document.querySelector("#tip-amount").value);
    const billAmount = Number(document.querySelector("#bill-amount").value);
    //do some math for the tip
    //do some math for the tip plus bill
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = billAmount + (billAmount * (tipPercent / 100));
    //reset the calculator
    document.querySelector("#tip-amount").reset();
    document.querySelector("#bill-amount").reset();
});

//get tip percentage

//process the values (actual calculation)

//display to the user