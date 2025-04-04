import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[heroArrowTopRightOnSquareOutline],svg[hero-arrow-top-right-on-square-outline]',
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
    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
  ></svg:path>`,
})
export class HeroArrowTopRightOnSquareOutline {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('none');
  readonly viewBox = input('0 0 24 24');
  readonly strokeWidth = input('1.5', { alias: 'stroke-width' });
  readonly stroke = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
