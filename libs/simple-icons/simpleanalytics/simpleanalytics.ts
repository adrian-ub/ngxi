import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSimpleanalytics],svg[si-simpleanalytics]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Simple Analytics</svg:title>
    <svg:path
      d="M1.019 13.019h3.849V24h-3.85zm8.943-6.68h3.85V24h-3.85zM19.132 0h3.85v24h-3.85z"
    />`,
})
export class SiSimpleanalytics {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
