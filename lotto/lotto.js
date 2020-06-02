var number = Array(45).fill().map(function(e, i){
    return i+1;
});

var suffle_number = [];
while(number.length > 0){
    suffle_number.push( number.splice( Math.floor( Math.random()*number.length ), 1 )[0]);
     
}

console.log(suffle_number);

var winning = suffle_number.slice(0, 6);
var bonus = suffle_number[suffle_number.length-1];

console.log("당첨 숫자:",winning," 보너스 숫자",bonus);

// var result = document.querySelector("#result");
// var bonus_div = document.querySelector(".bonus");
var result = document.getElementById("result");
var bonus_div = document.getElementsByClassName("bonus")[0];

//closer
for(var i=0; i<=winning.length; i++){
    (function(j){
        setTimeout(function(){
            var number;
            var div;
            if(j==winning.length){  //보너스
                number = bonus;
                div = bonus_div;
            }else{  //당첨 숫자
                number = winning[j];
                div = result;
            }
            var ball = document.createElement("div");
            ball.style.display = "inline-block";
            ball.style.border = "1px solid black";
            ball.style.borderRadius = "10px";
            ball.style.width = "20px";
            ball.style.height = "20px";
            ball.style.textAlign = "center";
            ball.style.marginRight = "10px";
            if(number<=10){
                ball.style.background = "red";
            }else if(number<=20){
                ball.style.background = "orange";
            }else if(number<=30){
                ball.style.background = "yellow";
            }else if(number<=40){
                ball.style.background = "blue";
            }else if(number<=45){
                ball.style.background = "green";
            }

            ball.textContent = number;
            div.append(ball);
        }, 1000*(i+1));
    }(i));
}
