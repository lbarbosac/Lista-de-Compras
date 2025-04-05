
const localStorage = "to-do-list"

function adicionarTarefa()
{
    let input = document.querySelector(".input-task");

    if(!input.value)
    {
        alert("Digite algo para escrever na sua lista");
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorage) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorage,JSON.stringify(values))
    }
}

function mostraValues()
{
    let values = JSON.parse(localStorage.getItem(localStorage) || "[]")
    let lista = document.querySelector(".list-task")
    lista.innerHTML = ''
}

