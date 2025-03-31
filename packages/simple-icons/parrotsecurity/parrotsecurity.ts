import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siParrotsecurity],svg[si-parrotsecurity]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Parrot Security</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm6.267 2.784L13.03 5.54l8.05-.179-8.05 3.333-2.154 2.688 5.007 9.038-1.536-1.605 1.645 3.456-4.937-5.527-6.268-6.28L2.77 12.11l.7-3.442 4.018-.261.823-4.06Z"
    />`,
})
export class SiParrotsecurity {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
