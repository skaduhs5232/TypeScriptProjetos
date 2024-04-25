//@ts-nocheck
import Carro from "./carro";
import Cliente from "./cliente";
import CompraCarro from "./compraCarro";
import Funcionario from "./funcionario";

let car = new Carro("logan",1999, 10000);
let cliente = new Cliente("diego", 4999)
let funcionario = new Funcionario('joao')

let compra = new CompraCarro(cliente, funcionario, car)


compra.detalhaCompra()