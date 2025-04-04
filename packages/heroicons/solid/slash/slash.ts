import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroSlashSolid],svg[hero-slash-solid]',
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
    d="M15.256 3.042a.75.75 0 0 1 .449.962l-6 16.5a.75.75 0 1 1-1.41-.513l6-16.5a.75.75 0 0 1 .961-.449Z"
    clip-rule="evenodd"
  ></svg:path>`,
})
export class HeroSlashSolid {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
