import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siFlashforge],svg[si-flashforge]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Flashforge</svg:title>
    <svg:path
      d="m.025 12 11.98-12 11.97 12-11.97 12Zm14.544 2.672-2.574 2.584v5.916L23.177 11.97 11.995.76v5.136L9.402 8.53v6.123l5.157-5.196Z"
    />`,
})
export class SiFlashforge {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
