import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoList } from './to-do-list';

describe('ToDoList', () => {
  let component: ToDoList;
  let fixture: ComponentFixture<ToDoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoList);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const httpTesting = TestBed.inject(HttpTestingController);
    const request = httpTesting.expectOne('/ToDoList');
    request.flush([
      { id: 1, title: 'Test ToDo', dateCreated: '2026-10-07T00:00:00Z' },
    ]);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.toDo()[0].dateCreated).toBeInstanceOf(Date);
  });
});
