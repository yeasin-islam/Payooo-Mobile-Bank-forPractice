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
                window.location.href = "./main.html"
                // document.getElementById("hidden-form").style.display = "none";
            }
            else {
                alert("You type wrong pin number. Please Enter correct pin number");
            }
        }
        else {
            alert("You type less then 11 or wrong number. please Enter valid account number");
        }
    })
