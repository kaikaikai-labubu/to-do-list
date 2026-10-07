import { Component, inject, OnInit, signal } from '@angular/core';
import type { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';
import { AddToDoItem } from '../add-to-do-item/add-to-do-item';
import { ToDoItem } from '../to-do-item/to-do-item';

@Component({
  imports: [AddToDoItem, ToDoItem],
  selector: 'app-to-do-list',
  styleUrl: './to-do-list.css',
  templateUrl: './to-do-list.html',
})
export class ToDoList implements OnInit {
  private readonly toDoService = inject(ToDoService);

  readonly toDo = signal<ToDo[]>([]);

  ngOnInit(): void {
    this.toDoService.getToDos().subscribe((items) => {
      this.toDo.set(items);
    });
  }

  protected addToDo(title: string): void {
    this.toDoService.addToDo(title).subscribe((newItem) => {
      this.toDo.update((items) => [...items, newItem]);
    });
  }

  protected deleteToDo(id: string): void {
    this.toDoService.deleteToDo(id).subscribe(() => {
      this.toDo.update((items) => items.filter((item) => item.id !== id));
    });
  }
}
