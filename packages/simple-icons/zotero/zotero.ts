import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siZotero],svg[si-zotero]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Zotero</svg:title>
    <svg:path
      d="M21.231 2.462 7.18 20.923h14.564V24H2.256v-2.462L16.308 3.076H2.975V0h18.256v2.462z"
    ></svg:path>`,
})
export class SiZotero {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
