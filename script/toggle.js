// for history
handleToggle("add-money-form", "none");
handleToggle("cash-out-form", "none");
handleToggle("transfer-money-form", "none");
handleToggle("get-bonus-form", "none");
handleToggle("pay-bill-form", "none");
handleToggle("transactions-box", "none");

// document.getElementById("add-money-form").style.display = "none";
// document.getElementById("cash-out-form").style.display = "none";
// document.getElementById("transfer-money-form").style.display = "none";
// document.getElementById("get-bonus-form").style.display = "none";
// document.getElementById("pay-bill-form").style.display = "none";
// document.getElementById("transactions-box").style.display = "none";


// for add-money-box
document.getElementById("add-money-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form", "block");
    handleToggle("cash-out-form", "none");
    handleToggle("transfer-money-form", "none");
    handleToggle("get-bonus-form", "none");
    handleToggle("pay-bill-form", "none");
    handleToggle("transactions-box", "none");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "block";
    // document.getElementById("cash-out-form").style.display = "none";
    // document.getElementById("transfer-money-form").style.display = "none";
    // document.getElementById("get-bonus-form").style.display = "none";
    // document.getElementById("pay-bill-form").style.display = "none";
    // document.getElementById("transactions-box").style.display = "none";

})
// for cash-out-box
document.getElementById("cash-out-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form", "none");
    handleToggle("cash-out-form", "block");
    handleToggle("transfer-money-form", "none");
    handleToggle("get-bonus-form", "none");
    handleToggle("pay-bill-form", "none");
    handleToggle("transactions-box", "none");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "none";
    // document.getElementById("cash-out-form").style.display = "block";
    // document.getElementById("transfer-money-form").style.display = "none";
    // document.getElementById("get-bonus-form").style.display = "none";
    // document.getElementById("pay-bill-form").style.display = "none";
    // document.getElementById("transactions-box").style.display = "none";

})
// for transfer-money-box
document.getElementById("transfer-money-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form","none");
    handleToggle("cash-out-form","none");
    handleToggle("transfer-money-form","block");
    handleToggle("get-bonus-form","none");
    handleToggle("pay-bill-form","none");
    handleToggle("transactions-box","none");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "none";
    // document.getElementById("cash-out-form").style.display = "none";
    // document.getElementById("transfer-money-form").style.display = "block";
    // document.getElementById("get-bonus-form").style.display = "none";
    // document.getElementById("pay-bill-form").style.display = "none";
    // document.getElementById("transactions-box").style.display = "none";

})
// for get-bonus-box
document.getElementById("get-bonus-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form","none");
    handleToggle("cash-out-form","none");
    handleToggle("transfer-money-form","none");
    handleToggle("get-bonus-form","block");
    handleToggle("pay-bill-form","none");
    handleToggle("transactions-box","none");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "none";
    // document.getElementById("cash-out-form").style.display = "none";
    // document.getElementById("transfer-money-form").style.display = "none";
    // document.getElementById("get-bonus-form").style.display = "block";
    // document.getElementById("pay-bill-form").style.display = "none";
    // document.getElementById("transactions-box").style.display = "none";

})
// for pay-bill-box
document.getElementById("pay-bill-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form","none");
    handleToggle("cash-out-form","none");
    handleToggle("transfer-money-form","none");
    handleToggle("get-bonus-form","none");
    handleToggle("pay-bill-form","block");
    handleToggle("transactions-box","none");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "none";
    // document.getElementById("cash-out-form").style.display = "none";
    // document.getElementById("transfer-money-form").style.display = "none";
    // document.getElementById("get-bonus-form").style.display = "none";
    // document.getElementById("pay-bill-form").style.display = "block";
    // document.getElementById("transactions-box").style.display = "none";

})
// for transactions-box
document.getElementById("transactions-mini-box").addEventListener("click", function () {
    handleToggle("history-section", "none");
    handleToggle("add-money-form","none");
    handleToggle("cash-out-form","none");
    handleToggle("transfer-money-form","none");
    handleToggle("get-bonus-form","none");
    handleToggle("pay-bill-form","none");
    handleToggle("transactions-box","block");

    // document.getElementById("history-section").style.display = "none";
    // document.getElementById("add-money-form").style.display = "none";
    // document.getElementById("cash-out-form").style.display = "none";
    // document.getElementById("transfer-money-form").style.display = "none";
    // document.getElementById("get-bonus-form").style.display = "none";
    // document.getElementById("pay-bill-form").style.display = "none";
    // document.getElementById("transactions-box").style.display = "block";

})