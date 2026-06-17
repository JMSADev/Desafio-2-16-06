function pesquisar(){

    let menores18 = 0;
    let maiores65 = 0;
    let entre18e64 = 0;

    let masculino = 0;
    let feminino = 0;

    for(let i = 1; i <= 20; i++){

        let nome = prompt(`Nome da pessoa ${i}:`);

        let idade = Number(
            prompt(`Idade de ${nome}:`)
        );

        let sexo = prompt(
            `Sexo de ${nome} (M/F):`
        ).toUpperCase();

        if(idade < 18){
            menores18++;
        }

        if(idade > 65){
            maiores65++;
        }

        if(idade >= 18 && idade < 65){
            entre18e64++;
        }

        if(sexo === "M"){
            masculino++;
        }

        if(sexo === "F"){
            feminino++;
        }

    }

    document.getElementById("resultado").innerHTML = `
        <p>Menores de 18 anos: ${menores18}</p>
        <p>Maiores de 65 anos: ${maiores65}</p>
        <p>Entre 18 e 64 anos: ${entre18e64}</p>
        <p>Masculino: ${masculino}</p>
        <p>Feminino: ${feminino}</p>
    `;
}