var image_location = 0;
var RSP_info = {
    "가위"   :   "284px",
    "바위"  :   "0",
    "보"    :   "568px"
};

var RSP_entries = Object.entries(RSP_info);

function computer_select(location){
    return RSP_entries.find(function(v){
        return v[1] === location;
    })[0];
}

function index_selector(value){
    return RSP_entries.findIndex(function(v){
        return v[0] === value;
    });
}

function winner_selector(user, com){
    var flag = index_selector(user) - index_selector(com);
    // if(flag === 0){
    //     console.log("비겼습니다.");
    // }else if(flag === -2 || flag === 1){
    //     console.log("이겼습니다.");
    // }else if(flag === 2 || flag === -1){
    //     console.log("졌습니다.");
    // }else{
    //     console.log("나..나오면 안 되는데..");
    // }

    if([0].includes(flag)){
        return "비겼습니다.";
    }else if([-2, 1].includes(flag)){
        return "이겼습니다.";
    }else if([-1, 2].includes(flag)){
        return "졌습니다.";
    }else{
        return "나..나오면 안 되는데..";
    }
}

setInterval(()=>{
    if(image_location === RSP_info.바위){
        image_location = RSP_info.가위;
    }else if(image_location === RSP_info.가위){
        image_location = RSP_info.보;
    }else{
        image_location = RSP_info.바위;
    }
    document.querySelector("#computer").style.background =
    "url('rock_scissors_paper.jpg') "+ image_location + " 0";
}, 100);

document.querySelectorAll(".btn").forEach(function(btn){
    btn.addEventListener("click", function(){
        console.log(this.textContent, computer_select(image_location));
        document.getElementById("user_select").textContent = this.textContent;
        document.getElementById("computer_select").textContent = computer_select(image_location);
        console.log(winner_selector(this.textContent, computer_select(image_location)));
        document.getElementById("RSP_result").textContent = winner_selector(this.textContent, computer_select(image_location));
    });
});
