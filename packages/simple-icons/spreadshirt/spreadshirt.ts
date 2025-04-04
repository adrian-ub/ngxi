import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSpreadshirt],svg[si-spreadshirt]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Spreadshirt</svg:title>
    <svg:path
      d="M12 6.306L7.796 2.102 0 9.898l12 12 12-12-7.796-7.796zm0 12L3.592 9.898l4.204-4.204L12 9.898l4.184-4.184 4.204 4.204"
    ></svg:path>`,
})
export class SiSpreadshirt {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
