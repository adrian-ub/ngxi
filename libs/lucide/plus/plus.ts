import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlus],svg[lucide-plus]',
  host: {
    class: 'lucide lucide-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 12h14" />
    <svg:path d="M12 5v14" />
  `,
})
export class LucidePlus {}
