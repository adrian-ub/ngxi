import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLinuxfoundation],svg[si-linuxfoundation]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Linux Foundation</svg:title>
    <svg:path
      d="M4.8 19.2h9.6V24H0V9.6h4.8v9.6zM0 0v7.2h4.8V4.822h14.4V19.2h-2.4V24H24V0H0z"
    />`,
})
export class SiLinuxfoundation {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
