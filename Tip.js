const tipcal = (event) => {

    let amount = document.getElementById('billAmpount').value;
    let perc = document.getElementById('tipPer').value;
    let tip = amount * (perc / 100);
    let total = tip + Number(amount);
    document.getElementById('tipTotal').value = tip;
    document.getElementById('totalBill').value = total;

}

function clearTip() {
    // reset the bill amount and tip amount
    document.getElementById("billAmpount").value = "";
    document.getElementById("tipPer").value = "";
    document.getElementById("tipTotal").value = "";
    document.getElementById("totalBill").value = "";
}