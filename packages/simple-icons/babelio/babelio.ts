import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBabelio],svg[si-babelio]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Babelio</svg:title>
    <svg:path
      d="M15.283 0a13.994 13.994 0 0 1-6.566 7.588v4.691a20.538 20.538 0 0 0 6.566-3.676zm3.283 7.7a22.121 22.121 0 0 1-13.132 7.03v4.213a35.545 35.545 0 0 0 3.836-.564 35.118 35.118 0 0 0 9.296-3.322zm3.282 7.331a36.747 36.747 0 0 1-19.696 5.686V24h19.696Z"
    ></svg:path>`,
})
export class SiBabelio {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
