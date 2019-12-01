var fun = 5;
function funFunction(){
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction(){
    // child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    fun ="AHH";
    console.log(3, fun);
}

console.log("window", fun);

funcFunction();
funerFunction();
funestFunction();

var fun = 5;
function funestFunction(){
    console.log(fun);
}