import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siVercel],svg[si-vercel]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Vercel</svg:title>
    <svg:path d="m12 1.608 12 20.784H0Z"></svg:path>`,
})
export class SiVercel {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
