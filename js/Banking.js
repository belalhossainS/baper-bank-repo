// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount Deposited 

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);



    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmmout = depositTotal.innerText;
    console.log
    const newDepositTotal = previousDepositAmmout + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';

})
