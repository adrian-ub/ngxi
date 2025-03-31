import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siDatastax],svg[si-datastax]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>DataStax</svg:title>
    <svg:path
      d="M10.863 8.818v6.364l-2.181 1.683H0v-9.73h8.682l2.181 1.683Zm-9.18 6.366h7.498V8.818H1.683v6.366Zm13.243-6.296v2.26h6.919L24 12.793v2.318l-2.155 1.646h-8.153v-1.646h8.645v-2.318h-6.919l-2.155-1.645v-2.26l2.155-1.645h7.939v1.645h-8.431Z"
    ></svg:path>`,
})
export class SiDatastax {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
