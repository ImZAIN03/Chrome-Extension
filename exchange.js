document.addEventListener('DOMContentLoaded', function() {

const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey = ""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD"

convert.addEventListener('click', () =>{
    console.log('hi');
    const amountTotal = amount.value;
    console.log('total', amountTotal);
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url', url);

    fetch(url, {
        header: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('rate', rate)
        const rate = data.rate;
        const resultPrice = amountTotal * rate;
        console.log('result', resultPrice)
        result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error('Request failed: ', error);
        result.innerHTML='An error occured please try again.'
    })
})
})