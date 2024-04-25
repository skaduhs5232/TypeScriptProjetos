import Carro from "./carro";
import Cliente from "./cliente";
import Funcionario from "./funcionario";

export default class CompraCarro {
  cliente: Cliente;
  carro: Carro;
  funcionario: Funcionario;
  precoFinal: number;
  valorDesconto: number;

  constructor(client: Cliente, func: Funcionario, car: Carro) {
    this.cliente = client;
    this.funcionario = func;
    this.carro = car;
    this.carro.setValor(this.darDesconto(this.carro.getValor()));
    this.precoFinal = this.carro.getValor();
    this.funcionario.setComissao(this.addComissao(this.precoFinal));
    this.valorDesconto = 0;
  }

  private darDesconto(preco: number): number {
    if (this.carro.getAno() < 2000) {
      this.valorDesconto = this.carro.getValor() * 0.90;
      this.carro.setValor(this.valorDesconto);
    } else {
      this.carro.setValor(preco);
    }
    if (this.cliente.getRenda() < 5000) {
      this.valorDesconto = this.carro.getValor() * 0.90;
      return this.carro.setValor(this.valorDesconto);
    } else {
      return this.carro.setValor(this.carro.getValor());
    }
  }

  public addComissao(valor: number): number {
    return this.funcionario.setComissao(valor * 0.2);
  }

  public detalhaCompra(): void {
    console.log(`Nome: ${this.cliente.getNome()} \nCarro ${this.carro.getModelo()} \n Ano ${this.carro.getAno()} \nValor: ${this.carro.getValor()}\nFuncionario ${this.funcionario.getNome()}\nComissao ${this.funcionario.getComissao()}`);
  }
}
