import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKibana],svg[si-kibana]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Kibana</svg:title>
    <svg:path
      d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z"
    ></svg:path>`,
})
export class SiKibana {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
