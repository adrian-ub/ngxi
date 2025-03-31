import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siExpertsexchange],svg[si-expertsexchange]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Experts Exchange</svg:title>
    <svg:path
      d="M7.28.9H0L8.36 12 0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06 3.64 4.82zM14.42 20.05l2.3 3.05H24l-5.94-7.88z"
    />`,
})
export class SiExpertsexchange {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
