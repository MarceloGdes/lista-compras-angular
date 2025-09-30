import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemList} from './item-list/item-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    ItemList

  ],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trab1bi');
}
