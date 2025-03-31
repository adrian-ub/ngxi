import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siXstate],svg[si-xstate]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>XState</svg:title>
    <svg:path
      d="M15.891 0h6.023l-6.085 10.563c-1.853-3.305-1.822-7.32.062-10.563zm6.055 23.999L8.078.001H2.055l6.919 12.015L2.055 24h6.023L12 17.236 15.892 24z"
    />`,
})
export class SiXstate {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
