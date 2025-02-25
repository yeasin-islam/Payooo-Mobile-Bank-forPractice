document.getElementById("transfer-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("transferAmount").value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById("pin").value;
    const accountNumber = document.getElementById("Account-Number").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && mainBalance && pin) {
        if (mainBalance > convertedAmount) {
            if (convertedPin === 1234) {
                const sub = convertedMainBalance - convertedAmount;
                const mainBalance = document.getElementById("main-balance").innerText = sub;


                const container = document.getElementById("transaction-cards-container");
                    const div = document.createElement("div");
                    div.classList.add("bg-none")
                    div.innerHTML = `
                <div class="cards flex justify-between items-center border rounded-md p-4">
                    <div class="flex justify-start items-center gap-4">
                        <img class="w-8 h-8" src="./Assest/Main Page/PayBill.png" alt="">
                        <div>
                            <h3 class="font-semibold text-lg">Transfer To ${accountNumber}</h3>
                            <h3>Amount ${amount}</h3> 
                            <p>Today 01:44 AM</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                         
                `

                    container.appendChild(div)








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