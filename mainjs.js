const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;



const showMsg = () => {
    console.log(pass.value.length);
     if(pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        
        p.textContent='Dobre hasło';
        p.style.color='lime';
     }else {
        p.textContent='słabe hasło';
        p.style.color='red';
     }

}

pass.addEventListener('keyup',showMsg);

