import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siRoblox],svg[si-roblox]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Roblox</svg:title>
    <svg:path
      d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z"
    />`,
})
export class SiRoblox {}
