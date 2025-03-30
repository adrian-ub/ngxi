import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siMcafee],svg[si-mcafee]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>McAfee</svg:title>
    <svg:path
      d="M12 4.8233L1.5793 0v19.1767L12 24l10.4207-4.8233V0zm6.172 11.626l-6.143 2.8428-6.1438-2.8429V6.6894l6.1439 2.8418 6.1429-2.8418z"
    />`,
})
export class SiMcafee {}
