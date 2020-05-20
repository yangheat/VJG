var word = document.createElement("div");
word.textContent = "제로초";
document.body.append(word);
var input_box = document.createElement("input");
document.body.append(input_box);
var input_button = document.createElement("button");
input_button.textContent = "입력";
document.body.append(input_button);
var result_text = document.createElement("div");
document.body.append(result_text);

input_button.addEventListener("click", function(){
    if(word.textContent[word.textContent.length-1] === input_box.value[0]){
        result_text.textContent = "정답";
        word.textContent = input_box.value;
        input_box.value = "";
    } else {
        result_text.textContent = "오답";
    }

});