import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLibreofficedraw],svg[si-libreofficedraw]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>LibreOffice Draw</svg:title>
    <svg:path
      d="M5 0C3.338 0 2 1.338 2 3v18c0 1.662 1.338 3 3 3h14c1.662 0 3-1.338 3-3V9l-9-9H5zm1 12a3 3 0 0 1 3-3c1.6 0 2.897 1.257 2.984 2.837L11.5 11l-2.298 3.98c-.068.004-.133.02-.203.02a3 3 0 0 1-3-3zm3.191 5 2.31-4 2.31 4H9.19zM18 16h-3.613L13 13.597V11h5v5zm4-16v7l-7-7h7zm-5 15h-3v-3h3v3z"
    ></svg:path>`,
})
export class SiLibreofficedraw {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
