import { Component } from '@angular/core';
import {ItemService} from './item/item.service';
import {NewItem} from './item/new-item/new-item';
import {ItemModel} from './item/item.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-list',
  imports: [
    NewItem,
    FormsModule
  ],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
  isAddingItem = false;
  editingItem?: ItemModel | undefined;

  filtro: 'todos' | 'comprados' | 'naoComprados' = 'todos';

  constructor(private itemService: ItemService) {
  }

  get itens() {
    return this.itemService.getItens();
  }

  get itensCompados() {
    return this.itens.filter(i => i.stComprado)
  }

  get itensNaoComprados(){
    return this.itens.filter(i => !i.stComprado)
  }

  get itensFiltrados() {
    switch (this.filtro) {
      case 'comprados':
        return this.itensCompados;
      case 'naoComprados':
        return this.itensNaoComprados;
      default:
        return this.itens;
    }
  }

  onStartAddItem() {
    this.isAddingItem = true;
  }

  onCloseAddItem() {
    this.isAddingItem = false;
    this.editingItem = undefined;
  }

  onCheckItem(itemId: string) {
    this.itemService.changeStComprado(itemId)
  }

  onEditItem(id: string) {
    this.editingItem = this.itemService.getItemById(id);
    this.isAddingItem = true;
  }

  onDeleteItem(id: string) {
    this.itemService.removeIten(id);
  }
}
