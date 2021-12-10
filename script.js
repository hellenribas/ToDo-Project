let sectionFirst = document.getElementById('input');
// console.log(sectionFirst);
function criarInput() {
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'texto-tarefa';
    sectionFirst.appendChild(input);
}
criarInput();

let sectionList = document.getElementById('list');
function criarLista() {
    let listOrden = document.createElement('ol');
    listOrden.id = 'lista-tarefas';
    sectionList.appendChild(listOrden);

}
criarLista();

function criarBotao() {
    let botao = document.createElement('button');
    botao.id = 'criar-tarefa';
    let text = document.createTextNode('Adicionar');
    botao.appendChild(text);
    // botao.style.backgroundColor = 'green';
    sectionFirst.appendChild(botao);
}
criarBotao();

let botaoId = document.getElementById('criar-tarefa');
botaoId.addEventListener('click', addItens);

let listOl = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
function addItens() {
    let criarLiAdd = document.createElement('li');
    criarLiAdd.className = 'liAdd'
    listOl.appendChild(criarLiAdd);
    let textInput = input.value;
    listOl.lastChild.innerText = textInput;
    input.value = '';
}
let liAdicionadas = document.getElementById('lista-tarefas');
let lis = document.getElementsByClassName('liAdd');
liAdicionadas.addEventListener('click', addCor);
function addCor(event) {
    let clicado = event.target;
    for (i = 0; i < lis.length; i += 1) {
        lis[i].style.backgroundColor = 'white';
    }
    clicado.style.backgroundColor = 'rgb(128, 128, 128)';
}

liAdicionadas.addEventListener('dblclick', riscandoTexto);

function riscandoTexto(event3) {
    if (event3.target.classList[1] !== 'completed') {
        event3.target.classList.add('completed');
    } else if (event3.target.classList[1] === 'completed') {
        console.log('entrou no if else risco');
        event3.target.classList.remove('completed');
    }
}
let botoes = document.getElementById('botoes');
function criarBotaoRemover() {
    let botao2 = document.createElement('button');
    botao2.id = 'apaga-tudo';
    let text2 = document.createTextNode('Apagar');
    botao2.appendChild(text2);
    // botao.style.backgroundColor = 'green';
    botoes.appendChild(botao2);
}
criarBotaoRemover();
let li = document.getElementsByClassName('liAdd');
let botaoRemove = document.getElementById('apaga-tudo');
let ol = document.querySelector('#lista-tarefas');
botaoRemove.addEventListener('click', removerLista);
function removerLista() {
    let liIndex = 0;
    const olLength = ol.children.length
    for (index = olLength - 1; index >= 0; index -= 1) {
        liIndex = li[index];
        ol.removeChild(liIndex);
    }
}
function criarBotaoRemoverFinalizado() {
    let botao3 = document.createElement('button');
    botao3.id = 'remover-finalizados';
    let text3 = document.createTextNode('Apagar Finalizados');
    botao3.appendChild(text3);
    // botao.style.backgroundColor = 'green';
    botoes.appendChild(botao3);
}
criarBotaoRemoverFinalizado()
let botao3 = document.getElementById('remover-finalizados');
botao3.addEventListener('click', removerFinalizados);
function removerFinalizados() {
    const olLength = ol.children.length
    for (index = olLength - 1; index >= 0; index -= 1) {
        if (ol.children[index].classList[1] === 'completed') {
            liIndex = li[index];
            ol.removeChild(liIndex);
        }
    }
}