import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKtor],svg[si-ktor]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Ktor</svg:title>
    <svg:path d="M8 0 0 8l8 8V8h8zm8 8v8H8l8 8 8-8z"></svg:path>`,
})
export class SiKtor {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
