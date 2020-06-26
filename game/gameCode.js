function startGame() {
var b = 1;
for(var i = 0; i <= 10; i++) {
    var answer = prompt("Вопрос " + b + ": " + questionList[i].qtext + "\r\n" + "Варианты ответа: \r\n" + questionList[i].a1 + "\n" + questionList[i].a2 + "\n" + questionList[i].a3 + "\n" + questionList[i].a4 + "\r\n" + "Ваш ответ?");
    if(answer.toUpperCase() == questionList[i].correct) {
        alert("Поздравляю вы выиграли " + questionList[i].gain + " рублей");
        b++;
    }
    else if (questionList[i].gain >= 1000){
        alert("Ответ неверный. Вы выиграли " + questionList[4].gain + " рублей"); 
        break;
    }
    else if (questionList[i].gain >= 100000){
        alert("Ответ неверный. Вы выиграли " + questionList[7].gain + " рублей"); 
        break;
    }
    else {
        alert("Ответ неверный. Вы выйграли 0 рублей");
        break;
    }   
}
};