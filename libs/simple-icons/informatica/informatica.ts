import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siInformatica],svg[si-informatica]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Informatica</svg:title>
    <svg:path
      d="M12 0l3.547 10.788-4.5-1.255-.25 4.43 7.121 4.035V18h.001l5.919-6zm-.64.65L.162 12l6.32 6.407L12 24l5.184-5.255-9.736-3.856z"
    />`,
})
export class SiInformatica {}
