import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import type { ToDo } from '../../models/to-do';
import { ToDoItem } from '../to-do-item/to-do-item';

@Component({
  imports: [ToDoItem],
  selector: 'app-to-do-list',
  styleUrl: './to-do-list.css',
  templateUrl: './to-do-list.html',
})
export class ToDoList implements OnInit {
  private readonly http = inject(HttpClient);

  readonly toDo = signal<ToDo[]>([]);

  ngOnInit(): void {
    this.http
      .get<ToDo[]>('https://localhost:7044/ToDoList')
      .subscribe((items) => {
        this.toDo.set(
          items
        );
      });
  }
}
