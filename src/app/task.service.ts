import { Injectable } from '@angular/core';
import { WebRequestService } from './webRequest.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  createNewList(title: string) {
    return this.webRequestService.post('lists', { title });
  }

  getLists() {
    return this.webRequestService.get('lists');
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }
}

// getLists() {
//   return this.webRequestService.get('lists');
// }
