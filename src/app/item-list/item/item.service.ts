import {Injectable} from '@angular/core';
import {InsertUpdateItemModel, ItemModel} from './item.model';

// Torna o serviço injetável e disponível em toda a aplicação (singleton).
@Injectable({providedIn: 'root'})
export class ItemService {
  private itens = [
    {
      id: "1",
      nome: "Arroz",
      quantidade: 2,
      unidade: "kg",
      categoria: "Alimentos",
      stComprado: false
    },
    {
      id: "2",
      nome: "Leite",
      quantidade: 6,
      unidade: "un",
      categoria: "Bebidas",
      stComprado: false
    },
    {
      id: "3",
      nome: "Sabão em pó",
      quantidade: 1,
      unidade: "kg",
      categoria: "Limpeza",
      stComprado: false
    }
  ]

  constructor() {
    const itens = localStorage.getItem("itens");

    if(itens){
      this.itens = JSON.parse(itens);
    }
  }


  private saveItens() {
    localStorage.setItem("itens", JSON.stringify(this.itens));
  }

  getItemById(id: string): ItemModel | undefined {
    return this.itens.find(item => item.id === id);
  }

  getItens(){
    return this.itens;
  }

  addItem(itensData: InsertUpdateItemModel) {
    this.itens.push({
      id: Math.random().toString(),
      nome: itensData.nome,
      quantidade: itensData.quantidade,
      unidade: itensData.unidade,
      categoria: itensData.categoria,
      stComprado: false
    });

    this.saveItens();
  }

  updateItem(itensData: InsertUpdateItemModel, id: string) {
    const itemIndex = this.itens.findIndex(
      item => item.id === id);

    if(itemIndex !== -1){
      this.itens[itemIndex].nome = itensData.nome;
      this.itens[itemIndex].quantidade = itensData.quantidade;
      this.itens[itemIndex].unidade = itensData.unidade;
      this.itens[itemIndex].categoria = itensData.categoria;

      this.saveItens();
    }
  }

  changeStComprado(id: string) {
    const itemIndex = this.itens.findIndex(
      item => item.id === id);

    if (itemIndex !== -1) {

      this.itens[itemIndex].stComprado = !this.itens[itemIndex].stComprado;

      this.saveItens();
    }
  }

  removeIten(id: string) {
    this.itens = this.itens.filter(item => item.id !== id);
    this.saveItens();
  }
}
