import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAtlasos],svg[si-atlasos]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>AtlasOS</svg:title>
    <svg:path
      d="m12 1.608 12 20.785H0l2.537-4.394h13.852L12 10.396l-1.844 3.193H5.082z"
    ></svg:path>`,
})
export class SiAtlasos {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
