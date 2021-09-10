document.getElementById('deposit-btn').addEventListener('click', function () {
    // Amount Deposited
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    // console.log(newDepositAmount)
    const totalDeposit = document.getElementById('total-deposit');
    // totalDeposit.innerText = depositAmount;
    const previousDepositAmount = totalDeposit.innerText;
    const newTotalAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    totalDeposit.innerText = newTotalAmount;
    // Balance Amount Update
    // const balanceTotal = document.getElementById('balance-amount');

    // balance update problem
    const balanceTotal = document.getElementById('balance-amount');
    const totalBalance = balanceTotal.innerText
    balanceTotal.innerText = parseFloat(totalBalance) + parseFloat(newDepositAmount);
    // const totalBalance = parseFloat(balanceTotal.innerText) + newTotalAmount;
    // balanceTotal.innerText = totalBalance;

    // clear input field
    depositInput.value = "";
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //  lets withdraw
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawInput.value;
    // console.log(newWithdrawAmount)
    // Withdraw 
    const totalWithdarw = document.getElementById('withdraw');
    const previousWithdrawAmount = totalWithdarw.innerText;
    const newTotalWithdraw = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    totalWithdarw.innerText = newTotalWithdraw;

    // withdraw balance update
    const balanceWithdraw = document.getElementById('balance-amount')
    const totalBalanaceWithdraw = parseFloat(balanceWithdraw.innerText) - newWithdrawAmount;
    balanceWithdraw.innerText = totalBalanaceWithdraw;


    // Clear withdraw input
    withdrawInput.value = '';
})