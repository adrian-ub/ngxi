import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroBackspaceMicro],svg[hero-backspace-micro]',
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
    d="M6.414 3c-.464 0-.909.184-1.237.513L1.22 7.47a.75.75 0 0 0 0 1.06l3.957 3.957A1.75 1.75 0 0 0 6.414 13h5.836A2.75 2.75 0 0 0 15 10.25v-4.5A2.75 2.75 0 0 0 12.25 3H6.414ZM8.28 5.72a.75.75 0 0 0-1.06 1.06L8.44 8 7.22 9.22a.75.75 0 1 0 1.06 1.06L9.5 9.06l1.22 1.22a.75.75 0 1 0 1.06-1.06L10.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L9.5 6.94 8.28 5.72Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroBackspaceMicro {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 16 16');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
