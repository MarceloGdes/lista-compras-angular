import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ItemService} from '../item.service';
import {ItemModel} from '../item.model';

@Component({
  selector: 'app-new-item',
  imports: [
    FormsModule
  ],
  templateUrl: './new-item.html',
  styleUrl: './new-item.css'
})
export class NewItem {
  @Input() item?: ItemModel;
  @Output() close= new EventEmitter();

  enteredName = '';
  enteredQuantity= 0;
  enteredUnit = '';
  enteredCategory = '';

  ngOnInit() {
    if (this.item){
      console.log("teste")
      this.enteredName = this.item.nome;
      this.enteredQuantity= this.item.quantidade;
      this.enteredUnit = this.item.unidade;
      this.enteredCategory = this.item.categoria;
    }
  }

  private itemService = inject(ItemService);

  onAddItem() {
    if(this.item){
      this.itemService.updateItem({
        nome: this.enteredName,
        categoria: this.enteredCategory,
        quantidade: this.enteredQuantity,
        unidade: this.enteredUnit
      }, this.item.id);

      this.item = undefined;

    }else {
      this.itemService.addItem({
        nome: this.enteredName,
        categoria: this.enteredCategory,
        quantidade: this.enteredQuantity,
        unidade: this.enteredUnit
      });
    }

    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
