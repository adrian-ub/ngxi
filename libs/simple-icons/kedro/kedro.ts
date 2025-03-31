import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siKedro],svg[si-kedro]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Kedro</svg:title>
    <svg:path d="m12 0 12 12-12 12L0 12 12 0z" />`,
})
export class SiKedro {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
