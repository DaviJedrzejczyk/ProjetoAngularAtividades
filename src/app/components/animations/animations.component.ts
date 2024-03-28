import {
  animate,
  group,
  keyframes,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { listItensAnimation } from 'app/animations/list-items.animation';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state(
        'move-left',
        style({
          transform: 'scale(1) translateX(0) rotate(0deg)',
        })
      ),
      state(
        'move-right',
        style({
          transform: 'scale(0.7) translateX(300px) rotate(300dg)',
        })
      ),
      transition('move-left <=> move-right', animate('1s')),
      transition(':enter', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 0,
              transform: 'scale(1) translateX(250px) rotate(180dg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(0.9) translateX(0px) rotate(0dg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(500px) rotate(360dg)',
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(500px) rotate(360dg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(0.9) translateX(0px) rotate(0dg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(1) translateX(250px) rotate(180dg)',
            }),
          ])
        ),
      ]),
      transition('* => move-right', animate('1s')),
      transition('* => move-left', animate('1s')),
    ]),
    listItensAnimation(),
  ],
})
export class AnimationsComponent {
  public moveIn = signal('');

  public listItems = signal([
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3',
    },
    {
      name: 'Item 4',
    },
    {
      name: 'Item 5',
    },
  ]);

  public deleteItem(index: number) {
    return this.listItems().splice(index, 1);
  }

  public addNewItem() {
    return this.listItems.update((oldValue) => [
      ...oldValue,
      { name: 'novo item' },
    ]);
  }
}

// /*group*/ sequence([
//   animate(
//     '1s',
//     style({
//       background: 'red',
//     })
//   ),
//   animate(
//     '2s',
//     style({
//       background: 'blue',
//     })
//   ),
//   animate(
//     '7s',
//     style({
//       background: 'none',
//       transform: 'translateY(0)',
//     })
//   ),
// ]),
