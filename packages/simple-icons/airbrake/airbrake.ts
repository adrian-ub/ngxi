import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siAirbrake],svg[si-airbrake]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Airbrake</svg:title>
    <svg:path
      d="M15.815.576 24 23.424h-6.072L10.679.576Zm-6.456 0 1.872 5.929-2.447 7.751c1.038.183 2.09.28 3.144.288.576 0 1.175-.048 1.824-.096l1.151 3.912a28.7 28.7 0 0 1-2.951.169 26.568 26.568 0 0 1-4.32-.361L5.88 23.424H0L8.181.576Z"
    ></svg:path>`,
})
export class SiAirbrake {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
