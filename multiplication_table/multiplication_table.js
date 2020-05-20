var num1 = Math.floor(Math.random()*9)+1;
var num2 = Math.floor(Math.random()*9)+1;
var result = num1 * num2

var word = document.createElement("div");
word.textContent = String(num1) + " 곱하기 " + String(num2) + " 은? ";
document.body.append(word);

var form = document.createElement("form");
document.body.append(form);
var input_box = document.createElement("input");
form.append(input_box);
var button = document.createElement("button");
button.textContent = "입력";
form.append(button);

var result_text = document.createElement("div");
document.body.append(result_text);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(result === Number(input_box.value)){
        result_text.textContent = "정답";
        input_box.value = "";
        input_box.focus();
        num1 = Math.floor(Math.random()*9)+1;
        num2 = Math.floor(Math.random()*9)+1;
        result = num1 * num2;
        word.textContent = String(num1) + " 곱하기 " + String(num2) + " 은? ";
    } else {
        result_text.textContent = "오답";
        input_box.textContent = "";
        input_box.focus();
    }
    
});
