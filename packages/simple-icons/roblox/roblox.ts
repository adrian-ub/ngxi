import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siRoblox],svg[si-roblox]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Roblox</svg:title>
    <svg:path
      d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z"
    />`,
})
export class SiRoblox {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
