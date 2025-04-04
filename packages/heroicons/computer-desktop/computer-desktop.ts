import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroComputerDesktop],svg[hero-computer-desktop]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke]': 'stroke()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
  ></svg:path>`,
})
export class HeroComputerDesktop {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('none');
  readonly viewBox = input('0 0 24 24');
  readonly strokeWidth = input('1.5', { alias: 'stroke-width' });
  readonly stroke = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
