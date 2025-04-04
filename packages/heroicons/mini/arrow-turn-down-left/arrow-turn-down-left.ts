import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[heroArrowTurnDownLeftMini],svg[hero-arrow-turn-down-left-mini]',
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
    d="M16.25 3a.75.75 0 0 0-.75.75v7.5H4.56l1.97-1.97a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-1.97-1.97h11.69A.75.75 0 0 0 17 12V3.75a.75.75 0 0 0-.75-.75Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroArrowTurnDownLeftMini {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 20 20');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
