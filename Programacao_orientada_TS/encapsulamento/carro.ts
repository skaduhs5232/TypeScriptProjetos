class Carro{
  private cor: string
  private ano: number
  private valor: number

  constructor(c: string, a: number, v: number){
    this.cor = c
    this.ano = a
    this.valor = v
  }

  public getValor(){
    return this.valor
  }

  public setValor(valor:number){
    this.valor = valor;
  }

  public getInfo(){
    console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`);
    
  }
}

let c1 = new Carro("azul", 2016, 150000)

c1.getInfo()

