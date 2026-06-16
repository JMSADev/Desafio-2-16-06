function iniciarPesquisa(){

    let podeDoar = 0;
    let naoPodeDoar = 0;

    for(let i = 1; i <= 12; i++){

        let idade =
        Number(prompt("Digite a idade"));

        let peso =
        Number(prompt("Digite o peso"));

        if(idade >= 18 &&
           idade <= 60 &&
           peso > 50){

            alert("Pode doar sangue");
            podeDoar++;

        }else{

            alert("Não pode doar");
            naoPodeDoar++;

        }

    }

    document.getElementById("resultado").innerHTML = `
        Podem doar: ${podeDoar}<br>
        Não podem doar: ${naoPodeDoar}
    `;
}