document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const bonusCouponNumber = document.getElementById("bonus-coupon-number").value;
    const convertedBonusCouponNumber = parseInt(bonusCouponNumber);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedBonusCouponNumber === 12345) {
        const sum = convertedMainBalance + (convertedMainBalance * 0.10);
        document.getElementById("main-balance").innerText = sum;
    }
    else {
        alert("Enter valid coupon number");
    }
})