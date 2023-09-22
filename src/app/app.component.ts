import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentitoComponent, TestComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterOutlet, ComponentitoComponent, TestComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular0';
  conditional: boolean = true;

  myArray: Array<string> = [];
  message = 'from app component';

  showComponentTest: boolean = false;

  cd = inject(ChangeDetectorRef);
  constructor() {
    console.log(this.doSomething('Hi').toUpperCase());
    setTimeout(() => {
      this.showComponentTest = true;
      this.cd.detectChanges();
    }, 4000);
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
