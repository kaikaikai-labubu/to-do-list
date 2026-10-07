import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { ToDo } from '../models/to-do';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private readonly http = inject(HttpClient);

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://localhost:7044/ToDoList');
  }

  addToDo(title: string): Observable<ToDo> {
    return this.http.post<ToDo>('https://localhost:7044/ToDoList', { title });
  }

  deleteToDo(id: string): Observable<void> {
    return this.http.delete<void>(`https://localhost:7044/ToDoList/${id}`);
  }
}