import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBookmeter],svg[si-bookmeter]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Bookmeter</svg:title>
    <svg:path
      d="M.678 14.262h6.089V24H.678v-9.738zm8.215 9.717h6.089V7.11H8.893v16.869zM17.234 0v24h6.089V0h-6.089z"
    />`,
})
export class SiBookmeter {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
