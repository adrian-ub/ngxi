import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siTelefonica],svg[si-telefonica]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Telef&#243;nica</svg:title>
    <svg:path
      d="M7.162 3.581a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0M15.581 12a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m0 8.419a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0"
    />`,
})
export class SiTelefonica {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
