function mostrarDivisores() {

    let numero = Number(document.getElementById("numero").value);

    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        
        if (numero % i === 0) {
            resultado += i + " ";
        }
    }

document.getElementById("resultado").innerHTML = resultado;
}