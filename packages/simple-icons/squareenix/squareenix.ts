import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSquareenix],svg[si-squareenix]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Square Enix</svg:title>
    <svg:path
      d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z"
    />`,
})
export class SiSquareenix {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
