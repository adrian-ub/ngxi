import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siNetapp],svg[si-netapp]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>NetApp</svg:title>
    <svg:path d="M0 2v20h9.33V10h5.34v12H24V2Z" />`,
})
export class SiNetapp {}
