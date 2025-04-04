import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTechcrunch],svg[si-techcrunch]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>TechCrunch</svg:title>
    <svg:path
      d="M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z"
    ></svg:path>`,
})
export class SiTechcrunch {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
