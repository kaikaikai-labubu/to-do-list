import { Component, output } from '@angular/core';
import type { ToDo } from '../../models/to-do';

@Component({
  imports: [],
  selector: 'app-add-to-do-item',
  styleUrl: './add-to-do-item.css',
  templateUrl: './add-to-do-item.html',
})
export class AddToDoItem {
  readonly addItem = output<string>();
  
}
