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

function balance() {
    const foodExpnese = getInputValue("food");
    const rentExpense = getInputValue("rent");
    const clothExpense = getInputValue("cloth");
    const expenseTotal = parseFloat(foodExpnese + rentExpense + clothExpense);
    const balanceTotal = getIncomeValue() - expenseTotal;

    document.getElementById("expense-total").innerText = expenseTotal;
    document.getElementById("balance-total").innerText = balanceTotal;

    return balanceTotal;
}

// Handle Calculate Balance Event :
document
    .getElementById("calculate-button")
    .addEventListener("click", function() {
        balance();
    });

// Handle Savings Event

document.getElementById("saving-button").addEventListener("click", function() {
    const savingsInput = document.getElementById("saving-input");
    const savingsInputPercent = parseFloat(savingsInput.value);

    const savings = (getIncomeValue() / 100) * savingsInputPercent;
    const remainingBalance = parseFloat(balance() - savings);

    document.getElementById("savings-amount").innerText = savings;
    document.getElementById("remaining-balance").innerText = remainingBalance;
});