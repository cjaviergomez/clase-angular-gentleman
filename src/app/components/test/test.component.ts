import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ExampleService } from '../../services';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  exampleService: ExampleService = inject(ExampleService);
  userData$ = this.exampleService.getData();
}
