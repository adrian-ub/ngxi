import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroArrowTurnUpRightMini],svg[hero-arrow-turn-up-right-mini]',
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
    d="M3.75 17a.75.75 0 0 0 .75-.75v-7.5h10.94l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 1 0-1.06 1.06l1.97 1.97H3.75A.75.75 0 0 0 3 8v8.25c0 .414.336.75.75.75Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroArrowTurnUpRightMini {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 20 20');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
