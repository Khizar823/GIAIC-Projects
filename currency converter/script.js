const currency = {
    USD : 1 ,
    EURO : 0.94 ,
    PKR : 280 ,
    GBP : 1.29 ,
    INR : 0.012 
}

document.getElementById('converter-form').addEventListener('submit', function(e){
    e.preventDefault();

    let fromcurrency = document.getElementById('from').value ;
    let tocurrency = document.getElementById('to').value ;
    let amount = document.getElementById('amount').value ;

    let fromAmount = currency[fromcurrency]
    let toAmount = currency[tocurrency]
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount 

    document.getElementById('result').textContent = `ConvertedAmount: ${Math.round(convertedAmount)} `;

})
