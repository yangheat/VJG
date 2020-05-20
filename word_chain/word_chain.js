var word = document.createElement("div");
word.textContent = "제로초";
document.body.append(word);
var form = document.createElement("form");
document.body.append(form);
var input_box = document.createElement("input");
form.append(input_box);
var input_button = document.createElement("button");
input_button.textContent = "입력";
form.append(input_button);
var result_text = document.createElement("div");
document.body.append(result_text);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(word.textContent[word.textContent.length-1] === input_box.value[0]){
        result_text.textContent = "정답";
        word.textContent = input_box.value;
        input_box.value = "";
        input_box.focus();
    } else {
        result_text.textContent = "오답";
        input_box.value = "";
        input_box.focus();
    }

});