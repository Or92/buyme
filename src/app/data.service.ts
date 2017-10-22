import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Task } from './models/task.model';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }
}
