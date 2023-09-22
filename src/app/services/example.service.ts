import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  userData$ = new BehaviorSubject<User>({ name: 'Carlos' });
  // userData$ = new Subject<User>(); // There is not initial value

  getData(): Observable<User> {
    return this.userData$.asObservable();
  }

  setData(user: User) {
    this.userData$.next(user);
  }
}
