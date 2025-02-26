document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const bonusCouponNumber = getInputValueByID("bonus-coupon-number");
    const mainBalance = getInnerTextByID("main-balance");


    // const bonusCouponNumber = document.getElementById("bonus-coupon-number").value;
    // const convertedBonusCouponNumber = parseInt(bonusCouponNumber);
    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);

    if (bonusCouponNumber === 12345) {
        const bonusAmount = mainBalance * 0.10;
        const sum = mainBalance + bonusAmount;
        // document.getElementById("main-balance").innerText = sum;
        getInnerTextByIdAndValue("main-balance", sum);

        const dateTime = getCurrentDateTime(); // Get formatted date & time
        const container = document.getElementById("transaction-cards-container");
        const div = document.createElement("div");
        div.classList.add("bg-none")
        div.innerHTML = `
                <div class="cards flex justify-between items-center border rounded-md p-4">
                    <div class="flex justify-start items-center gap-4">
                        <img class="w-8 h-8" src="./Assest/Main Page/GetBonus.png" alt="">
                        <div>
                            <h3 class="font-semibold text-lg">Coupon Number: ${bonusCouponNumber}</h3>
                            <h3>Bonus amount: <b>${bonusAmount} Taka</b></h3> 
                            <p>${dateTime}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                         
                `

        container.appendChild(div)


    }
    else {
        alert("Enter valid coupon number");
    }
})