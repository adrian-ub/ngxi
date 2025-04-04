import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siRadar],svg[si-radar]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Radar</svg:title>
    <svg:path d="M12 0L2.197 23.975 12 19.952 21.803 24z"></svg:path>`,
})
export class SiRadar {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
