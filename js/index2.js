document.querySelector('#calculate').addEventListener('click',()=>{
    const income = parseFloat(document.querySelector('#income').value);
    const software = parseFloat(document.querySelector('#software').value);
   const courses = parseFloat(document.querySelector('#courses').value);
  const internet = parseFloat(document.querySelector('#internet').value);
 const totalExpenses = software + courses + internet;
 console.log(totalExpenses);
 const balance = income - totalExpenses;
 console.log(balance);
 
    document.querySelector('#total-expenses').innerText = totalExpenses;
 document.querySelector('#balance').innerText = balance; 
    document.querySelector('#results').classList.remove('hidden') 
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-ingigo-500";

    historyItem.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income:$${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses:$${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance:$${balance.toFixed(2)}</p>
    
    `;
   const historyContainer = document.querySelector('#history-list');
   historyContainer.appendChild(historyItem)
    
})


document.querySelector('#calculate-savings').addEventListener('click', ()=>{
    const savingsPersentance = parseFloat(document.querySelector('#savings').value);
    console.log(savingsPersentance);
    const income = parseFloat(document.querySelector('#income').value);
    const software = parseFloat(document.querySelector('#software').value);
    const courses = parseFloat(document.querySelector('#courses').value);
    const internet = parseFloat(document.querySelector('#internet').value);
    const totalExpenses = software + courses + internet;
    console.log(totalExpenses);
    const balance = income - totalExpenses;
    console.log(balance);
    


    const savingAmount = (savingsPersentance * balance)/ 100;
    console.log(savingAmount);
    document.querySelector('#savings-amount').innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    document.querySelector('#remaining-balance').innerText = remainingBalance;
    
    
    
})

// history tab functionality
const historyTab = document.querySelector('#history-tab');
historyTab.addEventListener('click',()=>{
    historyTab.classList.add('text-white','bg-gradient-to-r' ,'from-blue-500','to-purple-600')
    document.querySelector('#assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.querySelector('#expense-form').classList.add('hidden');
    document.querySelector('#history-section').classList.remove('hidden');
    
    
})
const assistantTab = document.querySelector('#assistant-tab');
assistantTab.addEventListener('click',()=>{
    console.log('hellooidjfdf');
    
    assistantTab.classList.add('text-white','bg-gradient-to-r' ,'from-blue-500','to-purple-600')
    document.querySelector('#history-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.querySelector('#expense-form').classList.remove('hidden');
    document.querySelector('#history-section').classList.add('hidden');
    
})