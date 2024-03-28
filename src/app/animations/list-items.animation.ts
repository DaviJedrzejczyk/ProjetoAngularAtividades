import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const mediaMax600 = trigger('list-itens', [
  transition(':enter', [
    query(
      'li',
      [
        style({
          background: 'yellow',
          transform: 'translateY(100px)',
        }),
        stagger('700ms', [animate('1s')]),
      ],
      { optional: true }
    ),
  ]),
  transition(':decrement', [
    query('li:leave', [
      style({
        opacity: 1,
      }),
      animate('1s', style({ opacity: 0 })),
    ]),
  ]),
  transition(':increment', [
    query('li:enter', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)',
      }),
      stagger('700ms', [animate('1s')]),
    ]),
  ]),
]);

export const listItensAnimation = () => {
  if (isMatchMedia(600)) {
    return mediaMax600;
  }

  return mediaMax600;
};

const isMatchMedia = (value: number) => {
  return matchMedia(`(max-width: ${value}px)`).matches;
};
