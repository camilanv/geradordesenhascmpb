<script src="main.js"></script>
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
function classificaSenha(){

}
function classificaSenha(){
    forcaSenha.classList.add('forte');

}
function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    console.log(entropia);
    function geraSenha() {
        let alfabeto = '';
        if (checkbox[0].checked) {
            alfabeto = alfabeto + letrasMaiusculas;
        }
        if (checkbox[1].checked) {
            alfabeto = alfabeto + letrasMinusculas;
        }
        if (checkbox[2].checked) {
            alfabeto = alfabeto + numeros;
        }
        if (checkbox[3].checked) {
            alfabeto = alfabeto + simbolos;
        }
        let senha = '';
        for (let i = 0; i < tamanhoSenha; i++) {
            let numeroAleatorio = Math.random() * alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroAleatorio];
        }
        campoSenha.value = senha;
        classificaSenha(alfabeto.length);
        valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
        valorEntropia.textContent = Math.floor(2**entropia/(100e6*60*60*24));
        valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24));
valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
        const valorEntropia = document.querySelector('.entropia');
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = 2**Math.floor(entropia);
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
                
    
    }
    function classificaSenha(tamanhoAlfabeto){
        let entropia = tamanhoSenha * Math.log2(alfabeto.length);
        console.log(entropia);
        forcaSenha.classList.remove('fraca','media','forte');
        if (tamanhoSenha > 11){
            forcaSenha.classList.add('forte');
        } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
            forcaSenha.classList.add('media');
        } else if (tamanhoSenha <= 5){
            forcaSenha.classList.add('fraca');
        }
    }
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
    function classificaSenha(tamanhoAlfabeto){
        let entropia = tamanhoSenha * Math.log2(tamanhoSenha);
        console.log(entropia);
        forcaSenha.classList.remove('fraca','media','forte');
        if (entropia > 57){
            forcaSenha.classList.add('forte');
        } else if (entropia > 35 && entropia < 57) {
            forcaSenha.classList.add('media');
        } else if (entropia <= 35){
            forcaSenha.classList.add('fraca');
        }
    }
                    
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    
    forcaSenha.classList.add('forte');
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){

    }
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    }
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else {
        forcaSenha.classList.add('media');
    } 
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
        forcaSenha.classList.add('media');
    }
}
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
}

campoSenha.value = letrasMaiusculas;
function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    console.log(numeroAleatorio);
}
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();
function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(numeroAleatorio);
}
function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(letrasMaiusculas[numeroAleatorio]);
}
function geraSenha(){
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaiusculas[numeroAleatorio]);
    }
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
}
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}

function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaiusculas[numeroAleatorio]);
    }
}
function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
}
campoSenha.value = senha;
function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}

let tamanhoSenha = 12;
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('.checkbox');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
let alfabeto = '';
let alfabeto = '';
if (checkbox[0].checked){
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
console.log(alfabeto);
for (i=0; i < checkbox.length;i++){
 
}
for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

console.log(botoes)
botoes[0].onclick = diminuiTamanho;
function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
}
function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
}
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
<input name="senha" type="text" id="campo-senha" readonly>



