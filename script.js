const display = document.getElementById('display')


function clicavel(input){
    display.value  += input
}

function DisplayClear(){
    display.value = ""
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value= "Error"
    }
}

function ClearElement(){
   let valor = display.value;
   display.value = valor.slice(0, -1)
// ele serve para tirar o último valor colocado, é como se eu tivesse um Array e escolhesse de onde partir e onde terminar
// .slice(start, end)
}