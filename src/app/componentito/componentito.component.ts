import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componentito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentito.component.html',
  styleUrls: ['./componentito.component.scss'],
})
export class ComponentitoComponent {
  @Input({ required: true }) message = '';
  @Output() messageChange = new EventEmitter<string>();
}
