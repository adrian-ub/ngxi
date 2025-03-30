import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siArtixlinux],svg[si-artixlinux]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Artix Linux</svg:title>
    <svg:path
      d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z"
    />`,
})
export class SiArtixlinux {}
