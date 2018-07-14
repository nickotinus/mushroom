import { Component, OnInit } from '@angular/core';
import {Task} from "./mushroom/model/model";
import {MushroomService} from "./mushroom/services/mushroom";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  tasks: Task[];

  constructor(
    private mushroom: MushroomService) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.mushroom.readVoid<Task>("mushroom.task.list", (tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  createTask() {
    // let dialogRef = this.dialog.open(CreateTask, {
    // 	width: '500px'
    // });
    // this.mushroom.write<Task>("mushroom.task.create", new TaskRequest(description, "open"), () => {
    // 	this.loadTasks();
    // });
  }
}
