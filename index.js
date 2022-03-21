const btns_number = document.querySelectorAll('.calc-btn--num');
const btns_operator = document.querySelectorAll('.calc-btn--op');
const btns_control = document.querySelectorAll('.calc-btn--op-nd');

const getCalculatorNodes = e => {
    const calculator = document.querySelector('div[data-id="' + e.target.dataset.calc + '"]');
    const display = calculator.children[0].children[0];

    return display;
}


const calculate = (display) => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error syntaxis";
        console.log(error);
    }
}


btns_number.forEach(btn => {
    btn.addEventListener('click', e =>{
        const display = getCalculatorNodes(e);

        display.value += e.target.innerText;
    });
});

btns_operator.forEach(btn => {
    btn.addEventListener('click', e =>{
        const display = getCalculatorNodes(e);

        const operators = "-+*/";

        if(e.target.innerText === '.'){
            if (display.value[display.value.length - 1] !== '.'){
                display.value += e.target.innerText;
            }
        }
        else if (!operators.includes(display.value[display.value.length - 1])){
            display.value += e.target.innerText;
        }
        
    });
});

btns_control.forEach(btn => {
    btn.addEventListener('click', e =>{
        const display = getCalculatorNodes(e);

        if (e.target.innerText === "CA"){
            display.value = "";
        }

        if (e.target.innerText === "DEL"){
            display.value = display.value.substring(0, display.value.length - 1);
        }

        if (e.target.innerText === "="){
            calculate(display);
        }
        
    });
});