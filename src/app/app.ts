import { Component, signal } from '@angular/core';
import { ToDoList } from './components/to-do-list/to-do-list';

@Component({
  imports: [ToDoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('to-do-list');
}
