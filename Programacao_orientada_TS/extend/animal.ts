  export default class Animal {
    tipo: string;
    nome:string
    idade:number

    constructor(t:string, n:string, i: number){
        this.tipo = t
        this.nome= n 
        this.idade= i
  }

  public  falar():void{
    console.log(`O animal ${this.nome} está falando`)
  }
}

class Cachorro extends Animal {
  raca:string

  constructor(t:string, n:string, i: number, r:string){
    super(t,n,i)
    this.raca = r;
  }

  public falar(){
    console.log(`O ${c1.nome} está latindo`);
    
  }
}

class Gente extends Animal {
  cor: string

  constructor(t:string, n:string, i: number, c:string){
    super(t,n,i)
    this.cor = c
  }
  public falar(){
    console.log(`O ${p1.nome} está faladno`);
    
  }
}


let c1 = new Cachorro("cachorro", "bob", 2, 'poodle')
c1.falar()


let p1 = new Gente("humano", "thiagp", 20, 'azul')
p1.falar()

