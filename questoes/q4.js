function pesquisar(){

    let menores18 = 0;
    let maiores65 = 0;
    let entre18e64 = 0;

    let masculino = 0;
    let feminino = 0;

    for(let i = 1; i <= 20; i++){

        let nome = prompt("Nome");
        let idade = Number(prompt("Idade"));
        let sexo = prompt("Sexo M/F");

        if(idade < 18){
            menores18++;
        }

        if(idade > 65){
            maiores65++;
        }

        if(idade >= 18 && idade < 65){
            entre18e64++;
        }

        if(sexo.toUpperCase() === "M"){
            masculino++;
        }

        if(sexo.toUpperCase() === "F"){
            feminino++;
        }

    }

    document.getElementById("resultado").innerHTML = `
        Menores de 18: ${menores18}<br>
        Maiores de 65: ${maiores65}<br>
        Entre 18 e 64: ${entre18e64}<br>
        Masculino: ${masculino}<br>
        Feminino: ${feminino}
    `;
}