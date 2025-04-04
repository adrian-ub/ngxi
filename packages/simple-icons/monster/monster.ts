import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siMonster],svg[si-monster]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Monster</svg:title>
    <svg:path
      d="M0 0V24H5.42V12.39L12 18.19L18.58 12.39V24H24V0L12 11.23L0 0Z"
    ></svg:path>`,
})
export class SiMonster {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
