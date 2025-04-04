import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFonoma],svg[si-fonoma]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Fonoma</svg:title>
    <svg:path
      d="M19.706 21.919a4.295 4.295 0 0 0 4.293-4.296 4.295 4.295 0 1 0-4.293 4.296zM4.296 10.672a4.295 4.295 0 0 0 4.293-4.295 4.295 4.295 0 1 0-4.294 4.295zm10.412 0h4.975a4.277 4.277 0 0 0 4.293-4.295 4.277 4.277 0 0 0-4.293-4.296h-4.975a4.277 4.277 0 0 0-4.294 4.296 4.277 4.277 0 0 0 4.294 4.295zM4.295 21.92h4.976a4.277 4.277 0 0 0 4.293-4.296 4.277 4.277 0 0 0-4.293-4.295H4.295a4.277 4.277 0 0 0-4.293 4.295c.068 2.318 1.976 4.296 4.293 4.296z"
    ></svg:path>`,
})
export class SiFonoma {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}
