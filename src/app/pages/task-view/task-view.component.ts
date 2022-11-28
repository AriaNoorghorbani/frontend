import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  lists: any;
  tasks: any;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params.listId);
      this.taskService.getTasks(params.listId).subscribe((tasks) => {
        this.tasks = tasks;
      });
    });
    this.taskService.getLists().subscribe((lists) => {
      this.lists = lists;
    });
  }
}

// this.taskService.getLists().subscribe((lists) => {
//   this.lists = lists;
// })
