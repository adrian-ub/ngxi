import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siVirustotal],svg[si-virustotal]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>VirusTotal</svg:title>
    <svg:path
      d="M10.87 12L0 22.68h24V1.32H0zm10.73 8.52H5.28l8.637-8.448L5.28 3.48H21.6z"
    />`,
})
export class SiVirustotal {}
