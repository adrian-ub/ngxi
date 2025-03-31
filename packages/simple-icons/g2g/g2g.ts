import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siG2g],svg[si-g2g]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>G2G</svg:title>
    <svg:path
      d="M0 0v4.357h19.643v6.43H24V0H0zm0 6.44V24h24V12.805H6.648v4.36h12.995v2.478H4.357v-8.846h12.995V6.439H0z"
    />`,
})
export class SiG2g {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
