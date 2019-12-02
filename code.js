originalTurkey = "<img src='Turkey.png' style='left: 300px; top: 100px; position: absolute; height: 100px; width: 100px;' onclick='create()'>"
document.write(originalTurkey);
k = 1
function create(){
    for (let i = 0; i < k; i++) {
        let left = 1700*Math.random();
        let top = 880*Math.random();
        left = Math.round(left);
        top = Math.round(top);
        document.write(originalTurkey);
        let newTurkey = "<img src='Turkey.png' onclick='create()' style='left:" + left + "px; top:" + top + "px; position: absolute; height: 100px; width: 100px;'>";
        document.write(newTurkey);
        document.write("<body onkeypress='reset()'></body>");
    }
    k = k*2
}


function reset() {
    console.log('Active')
    if (event.keyCode === 99) {
        document.body.innerHTML = '';
        document.write("<body onkeypress='reset()'></body>");
        document.write(originalTurkey);
        k = 1;
    }    
}

