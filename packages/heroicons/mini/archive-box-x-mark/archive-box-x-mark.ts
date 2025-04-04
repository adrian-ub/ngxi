import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroArchiveBoxXMarkMini],svg[hero-archive-box-x-mark-mini]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
      d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z"
    ></svg:path>
    <svg:path
      fill-rule="evenodd"
      d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
      clip-rule="evenodd"
    ></svg:path>`,
})
export class HeroArchiveBoxXMarkMini {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 20 20');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
