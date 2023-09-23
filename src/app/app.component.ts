import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NotFoundService } from './services/not-found.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private notFoundService: NotFoundService) {}

  title = 'web-app';

  activeRoute: boolean = true;

  ngOnInit(): void {
    this.notFoundService.activeRoute$.subscribe((isActive) => {
      this.activeRoute = isActive;
    });
    initFlowbite();
  }
}
