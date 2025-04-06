
let input = document.querySelector('.input-tarefa'); 
let lista = document.querySelector('.lista');

let listaTarefas = [] // cria um array para guardar as tarefas

console.log('MINHA LISTA', listaTarefas);
rendenderizarListaDeTarefas()

function adicionar()
{
    // ve se o campo ta vazio ou com espaço
    if (input.value.trim() === "")
    {
        // dai se tiver ele mostra um aletra com essa mensagem
        alert("Você precisa digitar algo antes de adicionar!");
        return;
    }

    listaTarefas.push(input.value.trim());
    
    rendenderizarListaDeTarefas()
}

function rendenderizarListaDeTarefas()
{
    // mostra no console como esta a lista no momento, se atualizar é criado outro
    console.log('[RENDER] MINHA LISTA COMO FICOU', listaTarefas);

    // aqui criei uma variavel pro HTML que vai mostrar na tela
    let novoItem = ''

    listaTarefas.forEach(item => {
        console.log('um dos meus itens é ', item)

        novoItem += `
        <li class="task">
             <p>${item}</p>
            <button class="button-cancelar">x</button>
        </li>
        `;

    })

    lista.innerHTML = novoItem;
    document.querySelector('.input-tarefa').value = '';
}


