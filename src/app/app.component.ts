import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentitoComponent } from './componentito/componentito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterOutlet, ComponentitoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular0';
  conditional: boolean = true;

  myArray: Array<string> = [];
  message = 'from app component';

  constructor() {
    console.log(this.doSomething('Hi').toUpperCase());
  }

  doSomething(data: number): number;
  doSomething(data: string): string;
  doSomething(data: number | string): number | string {
    return data;
  }

  handleClick() {
    this.message = 'clicked at the app component';
  }
}
