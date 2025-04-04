import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroArrowUpRightMicro],svg[hero-arrow-up-right-micro]',
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
    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroArrowUpRightMicro {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 16 16');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
