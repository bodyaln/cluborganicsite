function cheackForm(){

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        const NameElement = selector.replace(/#/g, '');
        const btn2 = document.querySelector('.btn-send-orders');
        input.addEventListener('input', () => {
            if(document.querySelector(`.message__${NameElement}`)){
                document.querySelector(`.message__${NameElement}`).remove();
            }
            let statusMessage = document.createElement('div');
            statusMessage.classList.add("message",`message__${NameElement}`);
            statusMessage.style.cssText = `
                padding-top: 3px;
                margin-left: 2%;
                color: #FEFAEC;
                text-shadow: red 1px 1px 0, red -1px -1px 0, 
                red -1px 1px 0, red 1px -1px 0;
                grid-column: 1/3
            `;
            switch(selector){
                case '#name': 
                    Emptyinput(input);
                    if (input.value.match(/\d/g)) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Введіть літери, а не числа`;
                    }else{
                    };
                    break;
                case '#nameorder': 
                    Emptyinput(input);
                    if (input.value.match(/\d/g)) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Введіть літери, а не числа`;
                        btn2.style.cursor = "not-allowed";
                        btn2.setAttribute('disabled', true);
                    }else{
                        btn2.style.cursor = "pointer";
                        btn2.removeAttribute('disabled');
                    };
                    break;
                case '#email':
                    Emptyinput(input);
                    if (input.value.length > 0 && (input.value.length < 6 || !(input.value.includes("@") && input.value.includes(".")))) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Повинні бути символи '.' i '@' та кількість цифр більше 6`;
                    }else{
                    }
                    break;
                case '#emailorder':
                    Emptyinput(input);
                    if (input.value.length > 0 && (input.value.length < 6 || !(input.value.includes("@") && input.value.includes(".")))) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Повинні бути символи '.' i '@' та кількість цифр більше 6`;
                        btn2.style.cursor = "not-allowed";
                        btn2.setAttribute('disabled', true);
                    }else{
                        btn2.style.cursor = "pointer";
                        btn2.removeAttribute('disabled');
                    }
                    break;
             
                case '#cheackboxorder':
                    Emptyinput(input);
                    if (!(input.checked)) {
                        btn2.style.cursor = "not-allowed";
                        btn2.setAttribute('disabled', true);
                    }else{
                        btn2.style.cursor = "pointer";
                        btn2.removeAttribute('disabled');
                    }
                    break;
                case '#tel':
                    Emptyinput(input);
                    if(input.value.match(/\D/g)){
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Введіть числа, а не літери чи символи`;
                    }
                    else if (input.value.length < 8  && input.value.length > 0) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Кількість цифр повинна бути більше 8`;
                    }else{
                    };
                    break;
                case '#telorder':
                    Emptyinput(input);
                    if(input.value.match(/\D/g)){
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Введіть числа, а не літери чи символи`;
                    }
                    else if (input.value.length < 8  && input.value.length > 0) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Кількість цифр повинна бути більше 8`;
                        btn2.style.cursor = "not-allowed";
                        btn2.setAttribute('disabled', true);
                       
                    }else{
                        btn2.style.cursor = "pointer";
                        btn2.removeAttribute('disabled');
                    };
                    break;
                case '#text':
                    Emptyinput(input);
                    if (input.value.length < 50 && input.value.length > 0) {
                        input.style.border = "2px solid red";
                        statusMessage.innerText = `${'\u{026a0}'} Кількість цифр повинна бути більше 50, Залишилося: ${50 - input.value.length}`;
                    }
                    break;
                default:
                    Emptyinput(input);
                    break;
            }
            if(statusMessage.innerText !== ""){
                input.insertAdjacentElement('afterend', statusMessage);
            }
        });
    }
    
    function Emptyinput(input){
        if(input.value === ""){
            input.style.border = '1px solid black';
        }
        else {
            input.style.border = '2px solid #21a549';
        }
    }

    getDynamicInformation('#cheackbox');
    getDynamicInformation('#name');
    getDynamicInformation('#email');
    getDynamicInformation('#tel');
    // getDynamicInformation('#topic');
    getDynamicInformation('#text');
    getDynamicInformation('#nameorder');
    getDynamicInformation('#surnameorder');
    getDynamicInformation('#emailorder');
    getDynamicInformation('#telorder');
    getDynamicInformation('#cheackboxorder');


}
module.exports = cheackForm;