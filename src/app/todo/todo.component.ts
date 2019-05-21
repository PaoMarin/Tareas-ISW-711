import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[];
  constructor() {
  	this.tasks = [];
  }

  ngOnInit() {
  	this.tasks.push(new Task('Tarea 1', 'Open', 'High'));
  	this.tasks.push(new Task('Tarea 2', 'In Progress', 'Low'));
  	this.tasks.push(new Task('Tarea 3', 'In Progress', 'Low'));
  }

  deleteTask(task: Task){
  	this.tasks = this.tasks.filter((ele) => {
      return ele != task;
   	});
  }
}
