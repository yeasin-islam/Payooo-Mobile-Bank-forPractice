document.getElementById("history-section").style.display = "block" ;
// document.getElementById("add-money-form").style.display = "none" ;

// for history
// document.getElementById("main-container").addEventListener("click", function () {
//     document.getElementById("history-section").style.display = "block";
//     document.getElementById("add-money-form").style.display = "none";
//     document.getElementById("cash-out-form").style.display = "none";
//     document.getElementById("transfer-money-form").style.display = "none";
//     document.getElementById("get-bonus-form").style.display = "none";
//     document.getElementById("pay-bill-form").style.display = "none";
//     document.getElementById("history-section").style.display = "none";
//     document.getElementById("transections-form").style.display = "none";

// })

// for add-money-box
document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transections-form").style.display = "none";

})
// for cash-out-box
document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "block";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transections-form").style.display = "none";

})
// for transfer-money-box
document.getElementById("transfer-money-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "block";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transections-form").style.display = "none";

})
// for get-bonus-box
document.getElementById("get-bonus-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "block";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transections-form").style.display = "none";

})
// for pay-bill-box
document.getElementById("pay-bill-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "block";
    document.getElementById("transections-form").style.display = "none";

})
// for transactions-box
document.getElementById("transactions-box").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-money-form").style.display = "none";
    document.getElementById("get-bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transections-form").style.display = "block";

})