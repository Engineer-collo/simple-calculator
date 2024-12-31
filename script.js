
const display = document.querySelector('#displayField');







function addValueToDisplay(parvalue) {
display.value = display.value + parvalue;
}

function clearDisplayValue() {
    display.value = "";
    }
   
    function calculateDisplayValues() {
        try{
        display.value = eval(display.value);
        }catch(error) {
            display.value = "error";
        }
        }