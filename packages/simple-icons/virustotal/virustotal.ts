import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siVirustotal],svg[si-virustotal]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>VirusTotal</svg:title>
    <svg:path
      d="M10.87 12L0 22.68h24V1.32H0zm10.73 8.52H5.28l8.637-8.448L5.28 3.48H21.6z"
    />`,
})
export class SiVirustotal {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
