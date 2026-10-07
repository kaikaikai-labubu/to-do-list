import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToDoService } from '../../services/to-do.service';
import { ToDoList } from './to-do-list';

describe('ToDoList', () => {
  let component: ToDoList;
  let fixture: ComponentFixture<ToDoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoList],        
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.toDo()[0].dateCreated).toBeInstanceOf(Date);
  });
});
