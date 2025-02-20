document.getElementById('calculate').addEventListener('click', ()=>{
    const income = parseFloat(document.querySelector('#income').value);
    const software  = parseFloat(document.querySelector('#software').value);
    const courses = parseFloat(document.querySelector('#courses').value);
    const internet = parseFloat(document.querySelector('#internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    // const totalExpensesElement = document.querySelector('#total-expenses');
    // totalExpensesElement.innerText = totalExpenses
   
    document.querySelector('#total-expenses').innerText = totalExpenses.toFixed(2);
    document.querySelector('#balance').innerText = balance.toFixed(2);

    // document.querySelector('#balance').innerText = totalExpenses
    
    document.querySelector('#results').classList.remove('hidden')
   
    
    
    
})
