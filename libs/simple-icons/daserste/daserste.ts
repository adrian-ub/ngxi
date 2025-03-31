import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siDaserste],svg[si-daserste]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Das Erste</svg:title>
    <svg:path
      d="M11.646.005C5.158.2-.001 5.57 0 12.127.135 18.724 5.468 24 12 24s11.865-5.276 12-11.873C24.001 5.291 18.41-.195 11.645.005zm5.138 4.93V16.96L8.78 19.92v-9.08l-3.9 1.386V9.263l11.903-4.328z"
    />`,
})
export class SiDaserste {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
