var inicio = document.getElementById('inputinicio')
var fim = document.getElementById('inputfim')
var res = document.getElementById('res')
var passo = document.getElementById('inputpasso')
function contar() {
    if (inicio.value == '' || fim.value == '') {
        res.innerHTML = 'Os campos "início" e "fim" não podem ficar vazios!'
    } else if (Number(fim.value) < Number(inicio.value)) {
        res.innerHTML = 'O campo "fim" não pode ser menor que o "início"!'
    } else if (passo.value == '' || passo.value == 0) {
        res.innerHTML = 'Passo não pode ficar vazio ou igual a zero!'
    } else {
        var visor = ""
        for (var un = Number(inicio.value); un < Number(fim.value); un += Number(passo.value)) {
            visor += `${un} 👉`
        } 
        res.innerHTML = visor + '🏁'
    }
}