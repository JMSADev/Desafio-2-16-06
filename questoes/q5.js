function pesquisaHabitantes(){

    let totalPessoas = 0;

    let somaSalarioMasculino = 0;
    let qtdHomens = 0;

    let mulheres1000a3000 = 0;

    let homens2000 = 0;
    let mulheres2000 = 0;

    let continuar = true;

    while(continuar){

        let idade = Number(
            prompt("Digite a idade:")
        );

        let sexo = prompt(
            "Digite o sexo (M/F):"
        ).toUpperCase();

        let renda = Number(
            prompt("Digite a renda:")
        );

        totalPessoas++;

        if(sexo === "M"){

            qtdHomens++;

            somaSalarioMasculino += renda;

            if(renda >= 2000){
                homens2000++;
            }
        }

        if(sexo === "F"){

            if(renda >= 1000 && renda <= 3000){
                mulheres1000a3000++;
            }

            if(renda >= 2000){
                mulheres2000++;
            }
        }

        let resposta = prompt(
            "Deseja continuar? (S/N)"
        ).toUpperCase();

        if(resposta === "N"){
            continuar = false;
        }
    }

    let mediaMasculina = 0;

    if(qtdHomens > 0){
        mediaMasculina =
        somaSalarioMasculino / qtdHomens;
    }

    let percentualHomens =
    (homens2000 / totalPessoas) * 100;

    let percentualMulheres =
    (mulheres2000 / totalPessoas) * 100;

    document.getElementById("resultado").innerHTML = `
        <p>Total de pessoas: ${totalPessoas}</p>

        <p>Média salarial masculina:
        R$ ${mediaMasculina.toFixed(2)}</p>

        <p>Mulheres com renda entre
        R$ 1000 e R$ 3000:
        ${mulheres1000a3000}</p>

        <p>Percentual de homens com
        renda ≥ R$ 2000:
        ${percentualHomens.toFixed(2)}%</p>

        <p>Percentual de mulheres com
        renda ≥ R$ 2000:
        ${percentualMulheres.toFixed(2)}%</p>
    `;
}