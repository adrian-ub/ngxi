import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPrefect],svg[si-prefect]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Prefect</svg:title>
    <svg:path
      d="M12 8.003 4.288 4.002 12 0l7.713 4v8.004L12 16v8l-7.71-4v-8L12 16V8.003Z"
    />`,
})
export class SiPrefect {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
