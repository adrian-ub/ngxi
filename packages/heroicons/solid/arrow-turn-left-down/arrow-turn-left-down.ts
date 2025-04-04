import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[heroArrowTurnLeftDownSolid],svg[hero-arrow-turn-left-down-solid]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
    fill-rule="evenodd"
    d="M20.24 3.75a.75.75 0 0 1-.75.75H8.989v13.939l2.47-2.47a.75.75 0 1 1 1.06 1.061l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.751-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.469V3.75a.75.75 0 0 1 .75-.75H19.49a.75.75 0 0 1 .75.75Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroArrowTurnLeftDownSolid {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
