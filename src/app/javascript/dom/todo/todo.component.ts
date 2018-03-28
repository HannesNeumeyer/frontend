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
  }

  add(task){
    this.items.push(task);
    this.task.nativeElement.value = '';
    console.log(this.task);
  }

  delete(task){
    this.items.splice(task, 1);
  }
}
