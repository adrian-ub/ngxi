import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siStartdotgg],svg[si-startdotgg]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>start.gg</svg:title>
    <svg:path
      d="M6 0A5.999 5.999 0 00.002 6v5.252a.75.75 0 00.75.748H5.25a.748.748 0 00.75-.747V6.749C6 6.334 6.336 6 6.748 6h16.497a.748.748 0 00.749-.748V.749A.743.743 0 0023.247 0zm12.75 12a.748.748 0 00-.75.75v4.5a.748.748 0 01-.747.748H.753a.754.754 0 00-.75.751v4.5a.75.75 0 00.75.751H18a5.999 5.999 0 005.999-6v-5.25a.75.75 0 00-.75-.75z"
    ></svg:path>`,
})
export class SiStartdotgg {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
