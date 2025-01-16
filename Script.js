let billAmount = document.getElementById("billAmount");
let tipPersentage = document.getElementById("tipPersentage");
let tipAmount = document.getElementById('tipAmount');
let totalBill = document.getElementById('totalBill');



let tipcalcy = () => {
  let amount = billAmount.value;
  let persentage = tipPersentage.value;

  let tip = amount * (persentage / 100);
  let total = tip + Number(amount);

  tipAmount.value = tip;
  totalBill.value = total;
}
