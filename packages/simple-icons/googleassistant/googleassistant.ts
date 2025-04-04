import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siGoogleassistant],svg[si-googleassistant]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Google Assistant</svg:title>
    <svg:path
      d="M22.365 8.729c.9 0 1.635-.735 1.635-1.635s-.735-1.636-1.635-1.636-1.636.735-1.636 1.636.723 1.635 1.636 1.635m-4.907 5.452a3.27 3.27 0 1 0 0-6.542 3.27 3.27 0 0 0 0 6.542m0 8.722c2.105 0 3.816-1.711 3.816-3.829s-1.711-3.816-3.829-3.816a3.82 3.82 0 0 0-3.816 3.816 3.825 3.825 0 0 0 3.829 3.83M6.542 14.18a6.542 6.542 0 1 0 0-13.084 6.542 6.542 0 1 0 0 13.084"
    ></svg:path>`,
})
export class SiGoogleassistant {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
