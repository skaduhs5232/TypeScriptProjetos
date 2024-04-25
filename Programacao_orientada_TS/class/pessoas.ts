class Pessoa {
  constructor(n: string, i: number) {
      this.nome = n;
      this.idade = i;
  }
  nome: string;
  idade: number;
}

let p1 = new Pessoa("thiago", 20);

console.log(`Nome ${p1.nome} | idade ${p1.idade}`);

class Id extends Pessoa {
  constructor(n: string, i: number, c: number, r: string) {
      super(n, i); 
      this.codigo = c;
      this.relacao = r;
  }
  codigo: number;
  relacao: string;
}

let id1 = new Id("thiago", 20, 1234, "amigo");
console.log(`Nome ${id1.nome} | idade ${id1.idade} | código ${id1.codigo} | relação ${id1.relacao}`);
