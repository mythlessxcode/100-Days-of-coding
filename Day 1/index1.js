 let budget = 200;
 let dailyExpenses = [22, 53, 44, ];

 let totalExpense = dailyExpenses.reduce(
    (total, expense) => total + expense,
    0
 )

 console.log("Total Expense" , totalExpense)    
  

    if(totalExpense > budget){
        console.log("Warning!!!")
    }else{
        console.log("within budget")
    }









