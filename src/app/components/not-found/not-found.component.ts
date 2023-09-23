import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterContentInit,
} from '@angular/core';
import { NotFoundService } from 'src/app/services/not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor(private notFoundService: NotFoundService) {}

  ngOnInit(): void {
    this.notFoundService.setActiveRoute();
  }

  ngOnDestroy(): void {
    this.notFoundService.unsetActiveRoute();
  }
}
