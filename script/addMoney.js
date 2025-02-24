document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("addAmount").value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pin) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            const mainBalance = document.getElementById("main-balance").innerText = sum;
        }
        else {
            alert("Enter Valid PIN");
        }
    }
    else{
        alert("Enter Amount");
    }




})