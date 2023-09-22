import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { ExampleService } from '../../services';

@Component({
  selector: 'app-componentito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentito.component.html',
  styleUrls: ['./componentito.component.scss'],
})
export class ComponentitoComponent implements OnDestroy {
  @Input({ required: true }) message = '';
  @Output() messageChange = new EventEmitter<string>();

  exampleService = inject(ExampleService);

  // Subscription to observables
  // 1. use async pipe
  user$ = this.exampleService.getData();

  // 2. use a subscription and unsubscription on the onDestroy.
  subscription: Subscription = new Subscription();

  // 3. use takeUntilDestroyed (v.17)
  destroyedRef = inject(DestroyRef);

  constructor() {
    this.subscription = this.exampleService.getData().subscribe((data) => {
      console.log({ data });
    });

    this.exampleService
      .getData()
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        console.log({ data });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setUserName(): void {
    this.exampleService.setData({ name: 'Component' });
  }
}
