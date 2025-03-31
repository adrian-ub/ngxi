import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siHotwire],svg[si-hotwire]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Hotwire</svg:title>
    <svg:path
      d="m16.764 6.917-3.48.81L16.32 0 7.236 11.705l4.334-.854-4.087 7.982 2.364-.532L7.456 24l7.51-8.111-2.77.64 4.568-9.612z"
    />`,
})
export class SiHotwire {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
