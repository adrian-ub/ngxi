import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLucid],svg[si-lucid]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Lucid</svg:title>
    <svg:path
      d="M12 0 3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z"
    ></svg:path>`,
})
export class SiLucid {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
