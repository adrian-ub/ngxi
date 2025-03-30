import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siApmterminals],svg[si-apmterminals]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>APM Terminals</svg:title>
    <svg:path
      d="M23.8 2.95 0 16.55v4.5L24 9.32V2.95zm.2 10.1-8.87 4.21v3.68l8.87-3.4Z"
    />`,
})
export class SiApmterminals {}
