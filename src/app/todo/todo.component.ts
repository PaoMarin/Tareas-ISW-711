import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[];
  showForm = false;
  newTask: Task;
  constructor() {
  	this.tasks = [];
    this.newTask = new Task("", "", "");
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

  createTask(){
      this.tasks.push(this.newTask);
      this.newTask = new Task("", "", "");
      this.showForm = false;
  }

  editTask(task:Task){
     this.newTask.description = task.description;
     this.newTask.state = task.state;
     this.newTask.priority = task.priority;
      this.showForm = true;
  }
    
}
