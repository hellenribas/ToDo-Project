const sectionFirst = document.getElementById('input');
const sectionList = document.getElementById('list');
const botoes = document.getElementById('botoes');
const rgb = 'rgb(128, 128, 128)';
const listTask = 'lista-tarefas';

function criarInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'texto-tarefa';
  sectionFirst.appendChild(input);
}
criarInput();

function criarLista() {
  const listOrden = document.createElement('ol');
  listOrden.id = listTask;
  sectionList.appendChild(listOrden);
}
criarLista();

function criarBotao() {
  const botao = document.createElement('button');
  botao.id = 'criar-tarefa';
  const text = document.createTextNode('Adicionar');
  botao.appendChild(text);
  sectionFirst.appendChild(botao);
}
criarBotao();
const botaoId = document.getElementById('criar-tarefa');
const listOl = document.getElementById(listTask);
const input = document.getElementById('texto-tarefa');
function addItens() {
  const criarLiAdd = document.createElement('li');
  criarLiAdd.className = 'liAdd';
  listOl.appendChild(criarLiAdd);
  const textInput = input.value;
  listOl.lastChild.innerText = textInput;
  input.value = '';
}
botaoId.addEventListener('click', addItens);
const lis = document.getElementsByClassName('liAdd');
function addCor(event) {
  const clicado = event.target;
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].style.backgroundColor = '';
  } if (clicado.id !== listTask) {
    clicado.style.backgroundColor = rgb;
  }
}
listOl.addEventListener('click', addCor);

function riscandoTexto(event3) {
  if (event3.target.classList[1] !== 'completed') {
    event3.target.classList.add('completed');
  } else if (event3.target.classList[1] === 'completed') {
    event3.target.classList.remove('completed');
  }
}
listOl.addEventListener('dblclick', riscandoTexto);

function criarBotaoRemover() {
  const botao2 = document.createElement('button');
  botao2.id = 'apaga-tudo';
  const text2 = document.createTextNode('Apagar');
  botao2.appendChild(text2);
  // botao.style.backgroundColor = 'green';
  botoes.appendChild(botao2);
}
criarBotaoRemover();
const botaoRemove = document.getElementById('apaga-tudo');
const ol = document.querySelector('#lista-tarefas');
function removerLista() {
  let liIndex = 0;
  const olLength = ol.children.length;
  for (let index = olLength - 1; index >= 0; index -= 1) {
    liIndex = lis[index];
    ol.removeChild(liIndex);
  }
}
botaoRemove.addEventListener('click', removerLista);
function criarBotaoRemoverFinalizado() {
  const botao3 = document.createElement('button');
  botao3.id = 'remover-finalizados';
  const text3 = document.createTextNode('Apagar Finalizados');
  botao3.appendChild(text3);
  botoes.appendChild(botao3);
}
criarBotaoRemoverFinalizado();
const botao3 = document.getElementById('remover-finalizados');
function removerFinalizados() {
  const olLength = ol.children.length;
  for (let index = olLength - 1; index >= 0; index -= 1) {
    if (ol.children[index].classList[1] === 'completed') {
      const liIndex = lis[index];
      ol.removeChild(liIndex);
    }
  }
}
botao3.addEventListener('click', removerFinalizados);
function criarBotaoSalvar() {
  const criarBotaoSave = document.createElement('button');
  criarBotaoSave.id = 'salvar-tarefas';
  const textSalvar = document.createTextNode('Salvar');
  criarBotaoSave.appendChild(textSalvar);
  botoes.appendChild(criarBotaoSave);
}
criarBotaoSalvar();
const botaoSalvar = document.getElementById('salvar-tarefas');
function pegarInformacoes(lista) {
  const arrayInfo = [];
  for (let index = 0; index < lista.children.length; index += 1) {
    arrayInfo.push(lista.children[index].innerText, lista.children[index].className);
  }
  return arrayInfo;
}
function salvarLocalStorage(array) {
  localStorage.setItem('key', array);
}

botaoSalvar.addEventListener('click', () => {
  salvarLocalStorage(pegarInformacoes(listOl));
});
const itensLocalStorage = localStorage.getItem('key');
function listaLocalStorage() {
  const arrayLocal = itensLocalStorage.split(',');
  for (let index = 0; index < arrayLocal.length; index += 2) {
    const liLocalStorage = document.createElement('li');
    liLocalStorage.innerText = arrayLocal[index];
    liLocalStorage.className = arrayLocal[index + 1];
    listOl.appendChild(liLocalStorage);
  }
}
if (itensLocalStorage !== null) {
  listaLocalStorage();
}
function criarBotoesMover() {
  const criarMoverCima = document.createElement('button');
  criarMoverCima.id = 'mover-cima';
  const textCima = document.createTextNode('UP');
  criarMoverCima.appendChild(textCima);
  botoes.appendChild(criarMoverCima);

  const criarMoverBaixo = document.createElement('button');
  criarMoverBaixo.id = 'mover-baixo';
  const textBaixo = document.createTextNode('Down');
  criarMoverBaixo.appendChild(textBaixo);
  botoes.appendChild(criarMoverBaixo);
}
criarBotoesMover();

function moverBaixo() {
  for (let i = 0; i < listOl.children.length; i += 1) {
    if (listOl.children[i]
      .style.backgroundColor === rgb
         && listOl.children[i].nextSibling !== null) {
      const textSelec = listOl.children[i].innerText;
      const textIrmao = listOl.children[i].nextSibling.innerText;
      listOl.children[i].innerText = textIrmao;
      listOl.children[i].nextSibling.innerText = textSelec;
      listOl.children[i].nextSibling.style.backgroundColor = rgb;
      listOl.children[i].style.backgroundColor = '';
      return listOl.children[i];
    }
  }
}
function moverCima() {
  for (let i = 0; i < listOl.children.length; i += 1) {
    if (listOl.children[i]
      .style.backgroundColor === rgb
        && listOl.children[i].previousSibling !== null) {
      const textSelec2 = listOl.children[i].innerText;
      const textIrmao2 = listOl.children[i].previousSibling.innerText;
      listOl.children[i].previousSibling.innerText = textSelec2;
      listOl.children[i].innerText = textIrmao2;
      listOl.children[i].previousSibling.style.backgroundColor = rgb;
      listOl.children[i].style.backgroundColor = '';
      return listOl.children[i];
    }
  }
}
const botaoDown = document.getElementById('mover-baixo');
botaoDown.addEventListener('click', moverBaixo);
const botaoUp = document.getElementById('mover-cima');
botaoUp.addEventListener('click', moverCima);
function botaoRemSelecionado() {
  const botaoRemSelec = document.createElement('button');
  botaoRemSelec.id = 'remover-selecionado';
  const textRemove = document.createTextNode('Remover Selecionado');
  botaoRemSelec.appendChild(textRemove);
  botoes.appendChild(botaoRemSelec);
}
botaoRemSelecionado();

function removerSelecionado() {
  for (let i = 0; i < listOl.children.length; i = +1) {
    if (listOl.children[i].style.backgroundColor === rgb) {
      listOl.removeChild(listOl.children[i]);
    }
  }
}
const botaoremover = document.getElementById('remover-selecionado');
botaoremover.addEventListener('click', removerSelecionado);
