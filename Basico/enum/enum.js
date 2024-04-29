var semanaDias;
(function (semanaDias) {
    semanaDias[semanaDias["domingo"] = 1] = "domingo";
    semanaDias[semanaDias["segunda"] = 2] = "segunda";
    semanaDias[semanaDias["terca"] = 3] = "terca";
    semanaDias[semanaDias["quarta"] = 4] = "quarta";
    semanaDias[semanaDias["quinta"] = 5] = "quinta";
    semanaDias[semanaDias["sexta"] = 6] = "sexta";
    semanaDias[semanaDias["sabado"] = 7] = "sabado";
})(semanaDias || (semanaDias = {}));
function diasDaSemana() {
    var diaDaSemana;
    diaDaSemana = semanaDias.domingo;
    console.log(diaDaSemana); //imprime o valor do dia da semana (1)
    /*
     * Para mudar para outro dia utilize a seguinte estrutura de comando:
     * diaDaSemana = semanaDias.[nomeDoDia]
     */
    diaDaSemana = semanaDias.quarta;
    console.log(diaDaSemana); //imprime o valor do próximo dia da semana (4)
}
diasDaSemana();
/*
 * OBS.: A enumeração "semanaDias" é uma maneira mais organizada e limpa de representarmos os dias da semana no JavaScript.
 * OBS.: A linguagem JavaScript é case-sensitive, ou seja,
 *       "Domingo" e "domingo" são considerados diferentes!
 */
