import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroTvMini],svg[hero-tv-mini]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path d="M4 5h12v7H4V5Z"></svg:path>
    <svg:path
      fill-rule="evenodd"
      d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z"
      clip-rule="evenodd"
    ></svg:path>`,
})
export class HeroTvMini {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 20 20');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
