import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siCodesandbox],svg[si-codesandbox]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>CodeSandbox</svg:title>
    <svg:path
      d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z"
    ></svg:path>`,
})
export class SiCodesandbox {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
