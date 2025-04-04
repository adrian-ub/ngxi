import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroArrowUturnDownMicro],svg[hero-arrow-uturn-down-micro]',
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
    d="M9.75 3.5A2.75 2.75 0 0 0 7 6.25v5.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6.25a4.25 4.25 0 0 1 8.5 0v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 0 9.75 3.5Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroArrowUturnDownMicro {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 16 16');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
