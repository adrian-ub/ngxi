import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBandcamp],svg[si-bandcamp]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Bandcamp</svg:title>
    <svg:path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></svg:path>`,
})
export class SiBandcamp {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
