// alert()
// console.log("I Love Codding")
document.getElementById("login-btn").addEventListener("click",
    function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("Account-Number").value;
        const pin = document.getElementById("Pin").value;
        const convertedPin = parseInt(pin);
        if (accountNumber.length === 11) {

            if (convertedPin === 1234) {
                window.location.href="./AddMoney.html"
            }
            else {
                alert("pin thik nai")
            }
        }
        else {
            alert("account number thik nai")
        }

    })
