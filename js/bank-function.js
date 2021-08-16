document.getElementById("deposit-button").addEventListener("click", function () {

    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const DepositAmount = parseFloat(depositAmountText);

    //get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    const newdepositTotal = previousDepositTotal + DepositAmount;
    depositTotal.innerText = newdepositTotal;

    //update Balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + DepositAmount;

    // clear input filed 
    depositInput.value = "";
});


document.getElementById("withdraw-button").addEventListener("click", function () {

    const withdrawInput = document.getElementById("withdrow-input");
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);

    //withdraw update total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawAmount = parseFloat(previousWithdrawTotalText);


    withdrawTotal.innerText = previouswithdrawAmount + withdrawAmount;

    // after withdraw total Balance 

    const totalBalance = document.getElementById("balance-total");
    const previousTotalText = totalBalance.innerText;
    const previousTotalTextAmount = parseFloat(previousTotalText);


    totalBalance.innerText = previousTotalTextAmount - withdrawAmount;

    // withdraw input clear 
    withdrawInput.value = "";
});