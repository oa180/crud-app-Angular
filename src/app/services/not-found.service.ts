import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotFoundService {
  constructor() {}

  private activeRouteSubject = new BehaviorSubject<boolean>(true);
  activeRoute$ = this.activeRouteSubject.asObservable();

  setActiveRoute(): void {
    this.activeRouteSubject.next(false);
  }
  unsetActiveRoute(): void {
    this.activeRouteSubject.next(true);
  }
}
