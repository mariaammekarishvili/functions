let ludovikosExpenses = {}

ludovikosExpenses.bills = [22, 295, 176, 440, 37, 105, 10, 1100, 96, 52]
ludovikosExpenses.tips = [];
ludovikosExpenses.fullPayments = [];



function clacTip(list){
    for (let bill of list){
        if (bill >= 50 && bill <= 300 ){
            ludovikosExpenses.tips.push  ((bill * 15) / 100)
        }else ludovikosExpenses.tips.push  ((bill * 20) / 100)
    }
}

function fullPayment(){
    for (let i = 0 ; i < ludovikosExpenses.bills.length; i++){
        ludovikosExpenses.fullPayments.push( ludovikosExpenses.bills[i] + ludovikosExpenses.tips[i]);
        }

}



function averageCounting(list){
    let average = 0
    for (let item of list){

        average += item  / list.length
    }
    return Math.round( average )
}

clacTip(ludovikosExpenses.bills)
fullPayment()

ludovikosExpenses.billsMedium = averageCounting(ludovikosExpenses.bills)
ludovikosExpenses.tipsMedium = averageCounting(ludovikosExpenses.tips)


console.log(ludovikosExpenses)
