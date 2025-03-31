import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNormalizedotcss],svg[si-normalizedotcss]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Normalize.css</svg:title>
    <svg:path
      d="M8.427 6.361v5.064l-5.381.705 7.058.924v-1.915l5.469 6.5v-5.064l5.382-.705-7.059-.924v1.914zM12 0l12 12-12 12L0 12Z"
    />`,
})
export class SiNormalizedotcss {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
