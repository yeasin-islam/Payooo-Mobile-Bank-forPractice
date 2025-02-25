document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const bonusCouponNumber = document.getElementById("bonus-coupon-number").value;
    const convertedBonusCouponNumber = parseInt(bonusCouponNumber);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedBonusCouponNumber === 12345) {
        const bonusAmount = convertedMainBalance * 0.10;
        const sum = convertedMainBalance + bonusAmount;
        // document.getElementById("main-balance").innerText = sum;
        getInnerTextByIdAndValue("main-balance",sum);


        const container = document.getElementById("transaction-cards-container");
                    const div = document.createElement("div");
                    div.classList.add("bg-none")
                    div.innerHTML = `
                <div class="cards flex justify-between items-center border rounded-md p-4">
                    <div class="flex justify-start items-center gap-4">
                        <img class="w-8 h-8" src="./Assest/Main Page/PayBill.png" alt="">
                        <div>
                            <h3 class="font-semibold text-lg">Coupon Number ${bonusCouponNumber}</h3>
                            <h3>Bonus amount ${bonusAmount}</h3> 
                            <p>Today 01:44 AM</p>
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