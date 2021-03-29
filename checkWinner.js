let teams = {
    PowerRangers : {
        firstScores : [44, 23, 71],
        secondScores : [85, 54, 41]
    },
    FairyTails : {
        firstScores: [65, 54, 49],
        secondScores: [23, 34, 47]
    }
}

function calcAverage (scores) {
    let average = 0
    for (let score of scores ){
      average += score / scores.length
    }
    return  Math.round(average)
}



teams.PowerRangers.firstAverageScore = calcAverage(teams.PowerRangers.firstScores)
teams.PowerRangers.seconsAverageScore = calcAverage(teams.PowerRangers.secondScores)
teams.FairyTails.firstAverageScore = calcAverage(teams.FairyTails.firstScores)
teams.FairyTails.secondAverageScore = calcAverage(teams.FairyTails.secondScores)


function checkWinner(firstScore, secondScore){
    let result = ''
    if (firstScore > secondScore * 2){
        result = `Winner is  PowerRangers with Score ${firstScore} VS ${secondScore}`
    }else if (secondScore  > firstScore * 2){
        result = `Winner is  FairyTails with Score ${secondScore} VS  ${firstScore} `
    }else {result = `No one is winner the result is ${firstScore} VS ${secondScore}`}
    return result
}

teams.firstWiiner = checkWinner(teams.FairyTails.firstAverageScore,teams.PowerRangers.firstAverageScore)
teams.secondWiiner = checkWinner(teams.FairyTails.secondAverageScore,teams.PowerRangers.seconsAverageScore)

console.log(teams)