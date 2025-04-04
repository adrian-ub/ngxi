import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSuckless],svg[si-suckless]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>suckless</svg:title>
    <svg:path d="M0 4h24v4H4v2h20v10H0v-4h20v-2H0z"></svg:path>`,
})
export class SiSuckless {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
