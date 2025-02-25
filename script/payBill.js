document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("payBillAmount").value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && mainBalance && pin) {
        if (mainBalance > convertedAmount) {
            if (convertedPin === 1234) {
                const sub = convertedMainBalance - convertedAmount;
                const mainBalance = document.getElementById("main-balance").innerText = sub;
            }
            else {
                alert("Enter Valid PIN");
            }
        }
        else {
            alert("Do not have enough balance in your account.")
        }
    }
    else {
        alert("Enter Amount");
    }
})