enum semanaDias {
  domingo = 1,
  segunda = 2,
  terca = 3,
  quarta = 4,
  quinta = 5,
  sexta = 6,
  sabado = 7,
}
function diasDaSemana() {
  let diaDaSemana: semanaDias;
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

