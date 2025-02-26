// alert("😒😒😒😒😒😒😒")

//Function for converted a input value String to Float 
function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

//Function for converted a inner text String to Float 
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

//Function for set a value in a inner text by id 
function getInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

//Function for a form section block or none
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}



// Function to generate unique Transaction ID
function generateTransactionID() {
    return "TXN-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Get current date and time in a single formatted string
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM AM/PM
}