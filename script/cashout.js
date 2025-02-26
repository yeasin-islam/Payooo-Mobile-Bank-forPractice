document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueByID("cashoutAmount");
    const pin = getInputValueByID("cashout-form-Pin");
    const mainBalance = getInnerTextByID("main-balance");

    // const amount = document.getElementById("cashoutAmount").value;
    // const convertedAmount = parseInt(amount);
    // const pin = document.getElementById("pin").value;
    // const convertedPin = parseFloat(pin);
    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);
    const accountNumber = document.getElementById("Agent-Number").value;



    if (accountNumber.length === 11) {
        if (amount) {

            const NaNamount = document.getElementById("cashoutAmount").value;
            if (isNaN(NaNamount)) {
                alert("plz type number value")
                return;
            }

            if (amount < 0) {
                alert("Plz enter a positive number");
                return;
            }

            if (amount <= mainBalance) {
                if (pin === 1234) {
                    const sub = mainBalance - amount;
                    getInnerTextByIdAndValue("main-balance", sub);
                    // document.getElementById("main-balance").innerText = sub;



                    const transactionID = generateTransactionID();
                    const dateTime = getCurrentDateTime(); // Get formatted date & time
                    const container = document.getElementById("transaction-cards-container");
                    const div = document.createElement("div");
                    div.classList.add("bg-none")
                    div.innerHTML = `
                        <div class="cards flex justify-between items-center border rounded-md p-4">
                            <div class="flex justify-start items-center gap-4">
                                <img class="w-8 h-8" src="./Assest/Main Page/Cashout.png" alt="">
                                <div>
                                    <h3 class="font-semibold text-lg">CashOut to: ${accountNumber}</h3>
                                    <h3>Amount:<span class="font-semibold"> ${amount} Taka</span></h3> 
                                    <p>Transaction ID: <b>${transactionID}</b></p> 
                                    <p>${dateTime}</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                         
                    `

                    container.appendChild(div)








                }
                else {
                    alert("Enter a valid PIN");
                }
            }
            else {
                alert("Do not have enough balance in your account.");
            }
        }
        else {
            alert("Please enter amount.");
        }
    }
    else {
        alert("Account number must be exactly 11 digits.");
    }

})