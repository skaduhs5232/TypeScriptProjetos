let dados = {
  nome: "thiago",
  idade: 20,
  status: "ativo",
  oi:() =>{
    console.log(`oi ${dados.nome}`);
    
  }
};

console.log(typeof dados);
console.log(dados);
console.log(dados.nome);
dados.oi()
