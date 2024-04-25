// abstract class Gato {
//   nome: string
//   cor: string

//   constructor(n: string, c: string){
//     this.nome = n
//     this.cor = c
//   }

//   miar(){
//     console.log('miau!!')
//   }
// }


// class Alfredo extends Gato{
//   idade: number
//   constructor(n: string, c:string, i:number) {  
//     super(n,c) //chama o contrutor da classe pai
//     this.idade = i
// }
// }
// let g = new Alfredo("alfredo", "laranja", 2)

// console.log(g.nome);
// console.log(g.cor);
// console.log(g.idade);
// g.miar()

export default interface Rato{
  nome: string
  idade: number | string
  fugir(): void
}

class jerry implements Rato{
  nome: string
  idade: string | number
  constructor(n: string, i: number){
    this.nome = n
    this.idade = i
  }
  

  fugir(){
    console.log('corre!');
    
  }
}

let r = new jerry('jerry', 2)

console.log(r.nome);
r.fugir()
