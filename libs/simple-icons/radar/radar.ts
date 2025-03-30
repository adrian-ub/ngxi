import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siRadar],svg[si-radar]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Radar</svg:title>
    <svg:path d="M12 0L2.197 23.975 12 19.952 21.803 24z" />`,
})
export class SiRadar {}
