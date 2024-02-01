function appendValue(value){

    document.getElementById('display').value += value;

}

function clearDisplay(){
    document.getElementById('display').value = '';
}
function calculateResult() {
    const input = document.getElementById("display").value;
    const result = eval(input);

    // if (!(result) || !isFinite(result)) {
        
    //     document.getElementById("display").value = "Error"  
    // }
    // else{
        document.getElementById("display").value = result; 
    // }
    
}

function oneRemove(){
    var input =document.getElementById("display");
    var oneclear = input.value.slice(0,-1);
    input.value=oneclear
}