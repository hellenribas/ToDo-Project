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
function criarBotaoSalvar () {
    let criarBotaoSalvar = document.createElement('button');
    criarBotaoSalvar.id = 'salvar-tarefas';
    let textSalvar = document.createTextNode('Salvar');
    criarBotaoSalvar.appendChild(textSalvar);
    botoes.appendChild(criarBotaoSalvar);
}
criarBotaoSalvar();
let botaoSalvar = document.getElementById('salvar-tarefas');

let olNova = document.getElementById('lista-tarefas');

function pegarInformacoes (lista) {
    let arrayInfo = [];
    for (let index = 0; index < lista.children.length; index+= 1) {
        arrayInfo.push(lista.children[index].innerText, lista.children[index].className) 
    }
    console.log(arrayInfo);
    return arrayInfo;
}
function  salvarLocalStorage (array) {
    localStorage.setItem('key', array);
}

botaoSalvar.addEventListener('click', function () {
    salvarLocalStorage(pegarInformacoes(olNova));
});
let itensLocalStorage = localStorage.getItem('key');
function listaLocalStorage () {
    let arrayLocal = itensLocalStorage.split(',');
    for (index = 0; index < arrayLocal.length; index += 2) {
        let liLocalStorage = document.createElement('li');
        liLocalStorage.innerText =  arrayLocal[index];
        liLocalStorage.className = arrayLocal[index + 1];
        olNova.appendChild(liLocalStorage);
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

let botaoDown = document.getElementById('mover-baixo');
botaoDown.addEventListener('click', moverBaixo);
function moverBaixo () {
    for (i = 0; i < olNova.children.length; i += 1) {
        if (olNova.children[i].style.backgroundColor === 'rgb(128, 128, 128)' && olNova.children[i].nextSibling !== null) {
            let textSelec = olNova.children[i].innerText;
            console.log(textSelec);
            let textIrmao = olNova.children[i].nextSibling.innerText
            console.log(textIrmao);
            olNova.children[i].innerText = textIrmao;
            olNova.children[i].nextSibling.innerText = textSelec;
            olNova.children[i].nextSibling.style.backgroundColor = 'rgb(128, 128, 128)';
            olNova.children[i].style.backgroundColor = 'white';
            return olNova.children[i]
       }  
}
}
let botaoUp = document.getElementById('mover-cima');
botaoUp.addEventListener('click', moverCima);
function moverCima () {
    for (i = 0; i < olNova.children.length; i += 1) {
        if (olNova.children[i].style.backgroundColor === 'rgb(128, 128, 128)' && olNova.children[i].previousSibling !== null) {
            let textSelec2 = olNova.children[i].innerText;
            let textIrmao2 = olNova.children[i].previousSibling.innerText
            olNova.children[i].previousSibling.innerText = textSelec2;
            olNova.children[i].innerText = textIrmao2;
            olNova.children[i].previousSibling.style.backgroundColor = 'rgb(128, 128, 128)';
            olNova.children[i].style.backgroundColor = 'white';
            return olNova.children[i]
 
        
    }
}
}
function botaoRemSelecionado () {
    let botaoRemSelec = document.createElement('button');
    botaoRemSelec.id = 'remover-selecionado';
    let textRemove = document.createTextNode('Remover');
    botaoRemSelec.appendChild(textRemove);
    botoes.appendChild(botaoRemSelec);
}
botaoRemSelecionado();

let botaoremover = document.getElementById('remover-selecionado');
botaoremover.addEventListener('click',removerSelecionado);

function removerSelecionado () {
    for (i = 0; i < olNova.children.length; i =+ 1) {
        if (olNova.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            olNova.removeChild(olNova.children[i]);
        }
    }
}


