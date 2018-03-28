import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items = [];
  @ViewChild('task') task;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('items') === null){
        this.items = [];
      } else {
        this.items = JSON.parse(localStorage.getItem('items'));
      }
      return this.items;
  }

  add(task){
    this.items.push(task);
    this.task.nativeElement.value = '';
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  delete(task){
    this.items.splice(task, 1);

    localStorage.setItem('items', JSON.stringify(this.items));
  }

}
