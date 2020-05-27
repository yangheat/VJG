var body = document.body;
var table = document.createElement("table");
var row = [];
var col = [];
var turn = "X";

for(var i=0; i<3; i++){
    var tr = document.createElement("tr");
    row.push(tr);
    col.push([]);
    for(var j=0; j<3; j++){
        var td = document.createElement("td");
        col[i].push(td);
        td.addEventListener("click", click_event);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
body.appendChild(table);

function click_event(e){
    var row_tmp = row.indexOf(e.target.parentNode);
    var col_tmp = col[row_tmp].indexOf(e.target);

    if(col[row_tmp][col_tmp].textContent == ""){
        col[row_tmp][col_tmp].textContent = turn;
        turn = "O";
    }
    console.log( (row_tmp+1) + "행" + (col_tmp+1) + "열" );
}