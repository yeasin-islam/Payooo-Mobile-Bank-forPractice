document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueByID("payBillAmount");
    const pin = getInputValueByID("payBill-form-Pin");
    const mainBalance = getInnerTextByID("main-balance");
    // const amount = document.getElementById("payBillAmount").value;
    // const convertedAmount = parseInt(amount);
    // const pin = document.getElementById("pin").value;
    // const convertedPin = parseFloat(pin);
    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);
    const accountNumber = document.getElementById("payBill-Account-Number").value;
    const selectedBank = document.getElementById("payBill-allBank").value;
    const selectBillingType = document.getElementById("allBillingType").value;


    if (selectBillingType === "Select Your Billing Type") {
        alert("Plz select a billing type")
        return;
    }

    if (selectedBank === "Select Your Bank") {
        alert("Plz select a bank")
        return;
    }
    


    if (accountNumber.length === 11) {
        if (!isNaN(amount) && amount > 0) {

            // const NaNamount = document.getElementById("payBillAmount").value;
            // if (isNaN(NaNamount)) {
            //     alert("plz type number value")
            //     return;
            // }

            // if (amount < 0) {
            //     alert("Plz type positive number");
            //     return;
            // }


            if (mainBalance >= amount) {
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
                            <img class="w-8 h-8" src="./Assest/Main Page/PayBill.png" alt="">
                            <div>
                                <h3 class="font-semibold text-lg">${selectBillingType} Pay to ${selectedBank}</h3>
                                <h3>Amount:<span class="font-semibold"> ${amount} Taka</span></h3> 
                                <p>Account number: <span class="font-semibold">${accountNumber}</span></p>
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
                    alert("Enter a valid PIN.");
                }
            }
            else {
                alert("You do not have enough balance in your account.");
            }
        }
        else {
            alert("Please enter a valid and positive amount.");
        }
    }
    else {
        alert("Account number must be exactly 11 digits.");
    }
})