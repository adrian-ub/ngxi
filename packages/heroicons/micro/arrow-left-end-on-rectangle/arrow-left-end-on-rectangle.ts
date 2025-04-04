import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[heroArrowLeftEndOnRectangleMicro],svg[hero-arrow-left-end-on-rectangle-micro]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
      d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6.5A2.75 2.75 0 0 0 4.75 14h3a2.75 2.75 0 0 0 2.75-2.75v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h3C8.44 3.5 9 4.06 9 4.75v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 7.75 2h-3Z"
    ></svg:path>
    <svg:path
      d="M8.03 6.28a.75.75 0 0 0-1.06-1.06L4.72 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H7.06l.97-.97Z"
    ></svg:path>`,
})
export class HeroArrowLeftEndOnRectangleMicro {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 16 16');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
