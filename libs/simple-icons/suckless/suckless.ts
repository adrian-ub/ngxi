import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSuckless],svg[si-suckless]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>suckless</svg:title>
    <svg:path d="M0 4h24v4H4v2h20v10H0v-4h20v-2H0z" />`,
})
export class SiSuckless {}
