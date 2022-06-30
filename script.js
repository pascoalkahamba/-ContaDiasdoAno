let solucao = document.querySelector(".solucao");
let butao = document.querySelector("#butao");
let numMes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let nomeMes = document.querySelector(".nome-mes");
let verInfo = document.getElementsByName("txt-data");
let mesDias = document.querySelector(".mes-dia");

function verMes() {
    switch (Number(numMes.value)) {
        case 1:
            nomeMes.innerHTML = "Janeiro";
            break;
        case 2:
            nomeMes.innerHTML = "Fevereiro";
            break;
        case 3:
            nomeMes.innerHTML = "Março";
            break;
        case 4:
            nomeMes.innerHTML = "Abril";
            break;
        case 5:
            nomeMes.innerHTML = "Maio";
            break;
        case 6:
            nomeMes.innerHTML = "Junho";
            break;
        case 7:
            nomeMes.innerHTML = "Julho";
            break;
        case 8:
            nomeMes.innerHTML = "Agosto";
            break;
        case 9:
            nomeMes.innerHTML = "Setembro";
            break;
        case 10:
            nomeMes.innerHTML = "Outubro";
            break;
        case 11:
            nomeMes.innerHTML = "Novembro";
            break;
        case 12:
            nomeMes.innerHTML = "Dezembro";
            break;
    }
}

verInfo.forEach((elem) => {
    elem.onchange = function() {
        if (verInfo[0].checked) {
            solucao.style.visibility = "hidden";
            butao.style.display = "block";
            mesDias.style.display = "block";
        } else {
            let data = new Date();
            let diaAtoma = data.getDate();
            let mes = data.getMonth();
            let novoMes = mes + 1;
            // solucao.style.visibility = "hidden";
            for (let contMes = 0; contMes < novoMes; contMes++) {
                solucao.innerHTML = `Desde o inicio do ano se passaram : <strong>${
          contMes * 30 + diaAtoma
        } dias</strong>`;
            }
            solucao.style.visibility = "visible";
            butao.style.display = "none";
            mesDias.style.display = "none";
        }
    };
});
butao.addEventListener("click", () => {
    if (numMes.value.length === 0 || dia.value.length === 0) {
        alert("Nenhum dos campos tem que estar vazio!");

    } else if (
        numMes.value > 12 ||
        numMes.value <= 0 ||
        dia.value > 30 ||
        dia.value <= 0
    ) {
        alert(
            "ERRO!!!  \n O Mês tem que estar entre 1 a 12 \n O Dia tem que estar entre 1 a 30"
        );

    } else {
        //Achando o dia!
        let tamMes = Number(numMes.value);
        let tamDia = Number(dia.value);
        for (let contMes = 0; contMes < tamMes; contMes++) {
            solucao.innerHTML = `Desde o inicio do ano se passaram : <strong>${
        contMes * 30 + tamDia
      } dias</strong>`;
        }
        solucao.style.visibility = "visible";
    }

});

numMes.addEventListener("input", verMes);