import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPeertube],svg[si-peertube]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>PeerTube</svg:title>
    <svg:path
      d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545"
    ></svg:path>`,
})
export class SiPeertube {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
