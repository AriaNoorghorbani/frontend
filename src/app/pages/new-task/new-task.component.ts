import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLinkActive,
} from '@angular/router';
import { Task } from 'src/app/modals/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.listId);
      this.listId = params['listId'];
      console.log(this.listId);
    });
  }

  onCreateTask(title: string) {
    this.taskService
      .createNewTask(title, this.listId)
      .subscribe((task: any) => {
        console.log(task);
      });
    this.router.navigate([`lists/${this.listId}`]);
    // this.router.navigate(['../'], { relativeTo: this.route });
  }
}
