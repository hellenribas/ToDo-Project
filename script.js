const sectionFirst = document.getElementById('input');
const sectionList = document.getElementById('list');
const botoes = document.getElementById('botoes');
function criarInput() {
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'texto-tarefa';
    sectionFirst.appendChild(input);
}
criarInput();

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
    sectionFirst.appendChild(botao);
}
criarBotao();
const botaoId = document.getElementById('criar-tarefa');
const listOl = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
botaoId.addEventListener('click', addItens);

function addItens() {
    let criarLiAdd = document.createElement('li');
    criarLiAdd.className = 'liAdd'
    listOl.appendChild(criarLiAdd);
    let textInput = input.value;
    listOl.lastChild.innerText = textInput;
    input.value = '';
}
const lis = document.getElementsByClassName('liAdd');
listOl.addEventListener('click', addCor);
function addCor(event) {
    let clicado = event.target;
    for (i = 0; i < lis.length; i += 1) {
        lis[i].style.backgroundColor = '';
    } if (clicado.id !== 'lista-tarefas') {
    clicado.style.backgroundColor = 'rgb(128, 128, 128)';
}
}

listOl.addEventListener('dblclick', riscandoTexto);

function riscandoTexto(event3) {
    if (event3.target.classList[1] !== 'completed') {
        event3.target.classList.add('completed');
    } else if (event3.target.classList[1] === 'completed') {
        event3.target.classList.remove('completed');
    }
}
function criarBotaoRemover() {
    let botao2 = document.createElement('button');
    botao2.id = 'apaga-tudo';
    let text2 = document.createTextNode('Apagar');
    botao2.appendChild(text2);
    // botao.style.backgroundColor = 'green';
    botoes.appendChild(botao2);
}
criarBotaoRemover();
const botaoRemove = document.getElementById('apaga-tudo');
const ol = document.querySelector('#lista-tarefas');
botaoRemove.addEventListener('click', removerLista);
function removerLista() {
    let liIndex = 0;
    const olLength = ol.children.length
    for (index = olLength - 1; index >= 0; index -= 1) {
        liIndex = lis[index];
        ol.removeChild(liIndex);
    }
}
function criarBotaoRemoverFinalizado() {
    let botao3 = document.createElement('button');
    botao3.id = 'remover-finalizados';
    let text3 = document.createTextNode('Apagar Finalizados');
    botao3.appendChild(text3);
    botoes.appendChild(botao3);
}
criarBotaoRemoverFinalizado()
let botao3 = document.getElementById('remover-finalizados');
botao3.addEventListener('click', removerFinalizados);
function removerFinalizados() {
    const olLength = ol.children.length
    for (index = olLength - 1; index >= 0; index -= 1) {
        if (ol.children[index].classList[1] === 'completed') {
            liIndex = lis[index];
            ol.removeChild(liIndex);
        }
    }
}
function criarBotaoSalvar () {
    let criarBotaoSalvar = document.createElement('button');
    criarBotaoSalvar.id = 'salvar-tarefas';
    let textSalvar = document.createTextNode('Salvar');
    criarBotaoSalvar.appendChild(textSalvar);
    botoes.appendChild(criarBotaoSalvar);
}
criarBotaoSalvar();
let botaoSalvar = document.getElementById('salvar-tarefas');
function pegarInformacoes (lista) {
    let arrayInfo = [];
    for (let index = 0; index < lista.children.length; index+= 1) {
        arrayInfo.push(lista.children[index].innerText, lista.children[index].className) 
    }
    return arrayInfo;
}
function  salvarLocalStorage (array) {
    localStorage.setItem('key', array);
}

botaoSalvar.addEventListener('click', function () {
    salvarLocalStorage(pegarInformacoes(listOl));
});
let itensLocalStorage = localStorage.getItem('key');
function listaLocalStorage () {
    let arrayLocal = itensLocalStorage.split(',');
    for (index = 0; index < arrayLocal.length; index += 2) {
        let liLocalStorage = document.createElement('li');
        liLocalStorage.innerText =  arrayLocal[index];
        liLocalStorage.className = arrayLocal[index + 1];
        listOl.appendChild(liLocalStorage);
    }
}
if (itensLocalStorage !== null) {
    listaLocalStorage();
}
function criarBotoesMover() {
    let criarMoverCima = document.createElement('button');
    criarMoverCima.id = 'mover-cima';
    let textCima = document.createTextNode('UP');
    criarMoverCima.appendChild(textCima);
    botoes.appendChild(criarMoverCima);

    let criarMoverBaixo = document.createElement('button');
    criarMoverBaixo.id = 'mover-baixo';
    let textBaixo = document.createTextNode('Down');
    criarMoverBaixo.appendChild(textBaixo);
    botoes.appendChild(criarMoverBaixo);
}
criarBotoesMover();

const botaoDown = document.getElementById('mover-baixo');
botaoDown.addEventListener('click', moverBaixo);
function moverBaixo () {
    for (i = 0; i < listOl.children.length; i += 1) {
        if (listOl.children[i].style.backgroundColor === 'rgb(128, 128, 128)' && listOl.children[i].nextSibling !== null) {
            let textSelec = listOl.children[i].innerText;
            let textIrmao = listOl.children[i].nextSibling.innerText
            listOl.children[i].innerText = textIrmao;
            listOl.children[i].nextSibling.innerText = textSelec;
            listOl.children[i].nextSibling.style.backgroundColor = 'rgb(128, 128, 128)';
            listOl.children[i].style.backgroundColor = '';
            return listOl.children[i]
       }  
}
}
let botaoUp = document.getElementById('mover-cima');
botaoUp.addEventListener('click', moverCima);
function moverCima () {
    for (i = 0; i < listOl.children.length; i += 1) {
        if (listOl.children[i].style.backgroundColor === 'rgb(128, 128, 128)' && listOl.children[i].previousSibling !== null) {
            let textSelec2 = listOl.children[i].innerText;
            let textIrmao2 = listOl.children[i].previousSibling.innerText
            listOl.children[i].previousSibling.innerText = textSelec2;
            listOl.children[i].innerText = textIrmao2;
            listOl.children[i].previousSibling.style.backgroundColor = 'rgb(128, 128, 128)';
            listOl.children[i].style.backgroundColor = '';
            return listOl.children[i]
 
        
    }
}
}
function botaoRemSelecionado () {
    let botaoRemSelec = document.createElement('button');
    botaoRemSelec.id = 'remover-selecionado';
    let textRemove = document.createTextNode('Remover Selecionado');
    botaoRemSelec.appendChild(textRemove);
    botoes.appendChild(botaoRemSelec);
}
botaoRemSelecionado();

const botaoremover = document.getElementById('remover-selecionado');
botaoremover.addEventListener('click',removerSelecionado);

function removerSelecionado () {
    for (i = 0; i < listOl.children.length; i =+ 1) {
        if (listOl.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            listOl.removeChild(listOl.children[i]);
        }
    }
}


