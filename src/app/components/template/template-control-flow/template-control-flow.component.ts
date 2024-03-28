import { AsyncPipe, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgSwitch],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {


    public loadingData$: Observable<string[]> = of([
      'item1',
      'item2',
      'item3'
    ]).pipe(delay(3000))

    public switchCondition = 'A'
}
