// document.getElementById("add-money-btn").addEventListener("click", function (event) {
//     event.preventDefault();
//     const amount = document.getElementById("addAmount").value;
//     const convertedAmount = parseInt(amount);
//     const pin = document.getElementById("pin").value;
//     const convertedPin = parseFloat(pin);
//     const accountNumber = document.getElementById("Account-Number").value;
//     const mainBalance = document.getElementById("main-balance").value;
//     const convertedMainBalance = parseFloat(mainBalance);
//     if (accountNumber.length === 11) {
//         if (amount) {
//             if (convertedPin === 1234) {
//                 const sum = convertedMainBalance + convertedAmount;
//                 document.getElementById("main-balance").innerText = sum;
//                 // getInnerTextByIdAndValue("main-balance", sum);
//             }
//             else {
//                 alert("Enter Valid PIN");
//             }
//         } else {
//             alert("Enter Amount");
//         }
//     }
//     else {
//         alert("Enter the numbers length 11.");
//     }

// })


document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("addAmount").value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseFloat(pin);
    const accountNumber = document.getElementById("Account-Number").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const selectedBank = document.getElementById("allBank").value;

    if (amount < 0) {
        alert("Plz type possitive number");
        return;
    }

    if (isNaN(amount)) {
        alert("plz type number value")
        return;
    }


    if (accountNumber.length === 11) {
        if (amount) {
            if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById("main-balance").innerText = sum;

                document.getElementById("transection-box")


                const container = document.getElementById("transaction-cards-container");
                const div = document.createElement("div");
                div.classList.add("bg-none")
                div.innerHTML = `
                <div class="cards flex justify-between items-center border rounded-md p-4">
                    <div class="flex justify-start items-center gap-4">
                        <img class="w-8 h-8" src="./Assest/Main Page/PayBill.png" alt="">
                        <div>
                            <h3 class="font-semibold text-lg">Added Money From ${selectedBank}</h3>
                            <h3>Amount ${amount}</h3>
                            <p>Account number ${accountNumber}</p>  
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
            alert("Enter Amount");
        }
    }
    else {
        alert("Enter the numbers length 11.");
    }


    // if (amount) {
    //     if (convertedPin === 1234) {
    //         const sum = convertedMainBalance + convertedAmount;
    //         document.getElementById("main-balance").innerText = sum;
    //     }
    //     else {
    //         alert("Enter Valid PIN");
    //     }
    // }
    // else {
    //     alert("Enter Amount");
    // }

})