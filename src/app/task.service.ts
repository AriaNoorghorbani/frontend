import { Injectable } from '@angular/core';
import { WebRequestService } from './webRequest.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  getLists() {
    return this.webRequestService.get('lists');
  }

  createNewList(title: string) {
    return this.webRequestService.post('lists', { title });
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createNewTask(title: string, listId: string) {
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }
}
