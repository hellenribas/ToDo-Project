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
    console.log('entrounafunçãorisco');
    if (event3.target.classList[1] !== 'completed') {
        event3.target.classList.add('completed');
    } else if (event3.target.classList[1] === 'completed') {
        console.log('entrou no if else risco');
        event3.target.classList.remove('completed');
    }
}
