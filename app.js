//Income Function

function getIncomeValue() {
    const incomeInput = document.getElementById("income-input");
    const incomeAmount = parseFloat(incomeInput.value);
    return incomeAmount;
}

//Expense Function
function getInputValue(expense) {
    const expenseInput = document.getElementById(expense + "-expense-input");
    const expenseAmount = parseFloat(expenseInput.value);
    return expenseAmount;
}

// Balance Function

function balance() {
    const foodExpense = getInputValue("food");
    const rentExpense = getInputValue("rent");
    const clothExpense = getInputValue("cloth");
    const expenseTotal = parseFloat(foodExpense + rentExpense + clothExpense);
    const balanceTotal = getIncomeValue() - expenseTotal;

    document.getElementById("expense-total").innerText = expenseTotal;
    document.getElementById("balance-total").innerText = balanceTotal;

    return balanceTotal;
}

// Handle Calculate Button :
document
    .getElementById("calculate-button")
    .addEventListener("click", function() {
        balance();
    });

// Handle Savings Button

document.getElementById("saving-button").addEventListener("click", function() {
    const savingsInput = document.getElementById("saving-input");
    const savingsInputPercentage = parseFloat(savingsInput.value);

    const sucessMessage = document.getElementById("notify-sucess");
    const failError = document.getElementById("notify-fail");

    if (balance() > 0) {
        const savingsAmount = Math.round(
            (getIncomeValue() / 100) * savingsInputPercentage
        ).toFixed(2);

        const remainingBalance = parseFloat(balance() - savingsAmount).toFixed(2);

        document.getElementById("savings-amount").innerText = savingsAmount;
        document.getElementById("remaining-balance").innerText = remainingBalance;

        sucessMessage.style.display = "block";
        failError.style.display = "none";
    } else {
        failError.style.display = "block";
        sucessMessage.style.display = "none";
    }
});