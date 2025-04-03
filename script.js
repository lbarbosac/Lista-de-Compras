
const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let minhaListaDeItens = []

function adicionarNovaTarefa()
{
    minhaListaDeItens.push(input.value);

    input.value = ''
}

function mostrarTarefas()
{
    let novaLi = ''
    
    minhaListaDeItens.forEach((tarefa, posicao) =>
    { 
        <li class="task">
        <p>Casa</p>
        <button class="button-cancelar" onclick="deletar()">x</button>
        </li> 
    }
}

ListaCompleta.innerHTML = novaLi

function deletar()
{
    console.log('deletar');
}

button.addEventListener('click', adicionarNovaTarefa);