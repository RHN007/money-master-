// Handle Income Input :

document
    .getElementById("calculate-button")
    .addEventListener("click", function() {
        //Income Input

        const incomeInput = document.getElementById("income-input");
        const incomeAmount = parseFloat(incomeInput.value);

        //Expense Function
        function getInputValue(expense) {
            const expenseInput = document.getElementById(expense + "-expense-input");
            const expenseAmount = parseInt(expenseInput.value);
            return expenseAmount;
        }

        function calculateTotalExp() {
            const foodExpnese = getInputValue("food");
            const rentExpense = getInputValue("rent");
            const clothExpense = getInputValue("cloth");

            const expenseTotal = parseFloat(foodExpnese + rentExpense + clothExpense);

            document.getElementById("expense-total").innerText = expenseTotal;

            return expenseTotal;
        }

        // Get Current Balance
        const balanceTotal = document.getElementById("balance-total");
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(previousBalanceText);
        const newBalanceTotal =
            incomeAmount + previousBalanceAmount - calculateTotalExp();
        balanceTotal.innerText = newBalanceTotal;
    });