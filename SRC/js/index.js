/* 
Analise lógica do código:

Obj1: fazer o botão do trailer abrir a modal do trailer
    p1: pegar o elemento do botão pelo js
    p2: identificar o click do usuário no botão
    p3: pegar o elemento da modal pelo js
    p4: abrir a modal

Obj2: fazer o X fechar a modal
    p1: pegar o elemento da modal pelo js
    p2: identificar o click no X
    p3: fechar a modal
*/

//console.log('mostrar o document', document); console é o objeto, log é o método. console.log é bom para testar se as coisas funcionam, aparece no console do navegador

// document.querySelector('.botao_trailer'); busca uma classe no HTML e mostra no log. Não esquecer do . para representar a classe
const botaoTrailer = document.querySelector('.botao_trailer'); // variável constante, não varia durante o código. let é uma variável que muda, assim como var.
const video = document.getElementById('video'); // puxa um elemento por id em veez de classe
const link = video.src; /* puxa uma propriedade do elemento, nesse caso o src */
const fecharModal = document.querySelector('.fechar_modal');
const modal = document.querySelector('.modal'); // as variaveis tem que ficar antes dos comandos, de preferência antes do código inteiro

function alternarModal(){ //estrutura de função normal. Funções ajuda a não repetir código, e facilita manutenção.
    modal.classList.toggle('aberto');
};

botaoTrailer.addEventListener('click', () => {
    alternarModal(); // chamada de função
    video.setAttribute('src', link); /* adiciona uma classe aos elementos da classe especificada (modal) */
}); // EventListener é um detector de evento. O 'click' é o evento a ser detectado. () => {} é uma função de seta, dentro das {} tem uma ação

fecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', ''); // seta um atributo da variável
});