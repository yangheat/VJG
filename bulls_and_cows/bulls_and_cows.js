function number_setting() {
    var number_candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answer = []
    for (var i = 0; i < 3; i++) {
        /*
        var number = number_candidate.pop();
        answer.push(number);
        //answer = [9, 8, 7, 6]
        //number_candidate = [1, 2, 3, 4, 5]
    
        var number = number_candidate.shift();
        answer.push(number);
        //answer = [1, 2, 3, 4]
        //number_candidate = [5, 6, 7, 8, 9]
    
        var number = number_candidate.shift();
        answer.unshift(number);
        //answer = [4, 3, 2, 1]
        //number_candidate = [5, 6, 7, 8, 9]
        */

        var number = number_candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        answer.push(number);

    }
    console.log(answer);
    return answer;

}

var body = document.body;
var answer = number_setting();
var chk_count = 0;

var result = document.createElement("h1");
body.append(result);
var form = document.createElement("form");
body.append(form);
var input = document.createElement("input");
input.maxLength = 3;
form.append(input);
var button = document.createElement("button");
button.textContent = "입력";
form.append(button);

// 비동기 콜백함수(Asynchronius Callback function)
form.addEventListener("submit", function (e) {
    e.preventDefault();

    var strike = 0;
    var ball = 0;
    for (var i = 0; i < 3; i++) {
        if( answer[i] === Number(input.value[i]) ){
            strike++;
        }else if( answer.indexOf(Number(input.value[i])) > -1 ){
            ball++;
        }
    }

    chk_count++;

    if (strike === 0 && ball === 0) {
        result.textContent = "아웃"
    } else if(chk_count === 10){
        result.textContent = "너무 많이 틀려 문제가 초기화됩니다."
        chk_count=0;
        answer = number_setting();
    } else {
        result.textContent = strike + "S " + ball + "B";

        if(strike === 3){
            answer = number_setting();
        }
    }
    input.value = "";
    input.focus();

    
    

});