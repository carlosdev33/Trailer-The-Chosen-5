
/* Comentários utlizados para fins de estudo. */

/* OBJETIVO 1 - quando o usúario clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer.

     - passo 1 - dar um jeito de identificar o elemento que representa o botão na tela usando js.

     - passo 2 - dar um jeito de identificar quando o usúario clicar no botão.

     - passo 3 - dar um jeito de pegar o elemento da modal no js.

     - passo 4 - abrir a modal.
*/

console.log('mostrar o document', document);

// passo 1 - dar um jeito de identificar o elemento que representa o botão na tela usando js.

/* Outro método de "abrir" função em JavaScript.

function alternarModal() {

}

(código para "chamar"* a função)
*faz a função funcionar.
alternarModal();

*/

console.log(document.querySelector(".botao-trailer"));

const botaoTrailerTheChosen = document.querySelector(".botao-trailer");

// passo 2 - dar um jeito de identificar quando o usúario clicar no botão.

botaoTrailerTheChosen.addEventListener ("click", () => {
    // passo 4 - abrir a modal.
    modal.classList.add("aberto")
    video.setAttribute("src", "https://www.youtube.com/embed/-XWx7r8TNPc?si=nM-aMQv0JVmft5Td");

})

// passo 3 - dar um jeito de pegar o elemento da modal no js.

const modal = document.querySelector(".modal")

/*
OBJETIVO 2 - quando o usário clicar no "X", devemos fechar a modal.

     - passo 1 - dar um jeito de identificar o elemento de fechar a modal usando js.

     - passo 2 - dar um jeito de identificar quando o usúario clicar no "X".

     - passo 3 - fechar a modal.
*/

// passo 1 - dar um jeito de identificar o elemento de fechar a modal usando js.

const botaoFecharModal = document.querySelector(".fecharmodal");

// passo 2 - dar um jeito de identificar quando o usúario clicar no "X".

botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modal.
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})

const video = document.getElementById("video2");




















