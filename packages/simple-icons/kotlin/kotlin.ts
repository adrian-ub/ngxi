import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKotlin],svg[si-kotlin]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Kotlin</svg:title>
    <svg:path d="M24 24H0V0h24L12 12Z"></svg:path>`,
})
export class SiKotlin {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
