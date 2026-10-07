import { Component, input, output } from '@angular/core';
import type { ToDo } from '../../models/to-do';

@Component({
  imports: [],
  selector: 'app-to-do-item',
  styleUrl: './to-do-item.css',
  templateUrl: './to-do-item.html',
})
export class ToDoItem {
  readonly toDo = input.required<ToDo>();
  readonly deleteToDo = output<string>();
}
